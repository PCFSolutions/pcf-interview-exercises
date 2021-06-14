import mongoose from 'mongoose';
import Locations, { Location, LocationLean } from '../location.model';

interface UpdateLocationOptions {
  id: string;
  name?: string;
}
const remove = async (options: UpdateLocationOptions): Promise<LocationLean> => {
  const { id, name } = options;

  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    const location = (await Locations.findOne({
      _id: mongoose.Types.ObjectId(id),
      removed: false,
    })) as Location;

    if (!location) {
      throw new Error(`No location found with id ${id}`);
    }

    if (name) {
      location.name = name;
    }

    await location.save();
    const found = (await Locations.findOne({ _id: location._id })) as Location;

    await session.commitTransaction();
    await session.endSession();
    return found as LocationLean;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(`Failed to update Location: ${error.message}`);
  }
};

export default remove;
