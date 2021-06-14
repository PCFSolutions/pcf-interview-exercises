import mongoose from 'mongoose';
import { CreateUserOptions } from '../../../lib/types';
import Users, { User } from '../users.model';

const add = async ({ username, password, role }: CreateUserOptions): Promise<User | null> => {
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    // TODO: Create a user

    await session.commitTransaction();
    await session.endSession();
    return null;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export default add;
