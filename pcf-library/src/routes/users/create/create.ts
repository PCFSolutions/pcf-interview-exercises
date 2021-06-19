import mongoose from 'mongoose';
import { CreateUserOptions } from '../../../lib/types';
import Users, { User } from '../users.model';

const add = async ({ username, password, role }: CreateUserOptions): Promise<User | null> => {
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    // TODO: Create a user
    const user = await Users.create({ username, password, role });

    await session.commitTransaction();
    await session.endSession();
    return user;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(`Failed to create user: User ${username} already exists`);
  }
};

export default add;
