import mongoose from 'mongoose';
import Locations, { Location, LocationLean } from '../location.model';

interface CreateLocationOptions {
  name: string;
}
const create = async ({ name }: CreateLocationOptions): Promise<Location> => {
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    const found = (await Locations.findOne({ name })) as Location;
    if (found) {
      throw new Error(`The location ${name} already exists`);
    }

    const candidate: LocationLean = {
      name,
      removed: false,
    };

    const location = (await new Locations(candidate).save({ session })) as Location;

    await session.commitTransaction();
    await session.endSession();
    return location;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(`Failed to create config string: ${error.message}`);
  }
};

export default create;
