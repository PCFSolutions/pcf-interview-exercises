import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Users, { User } from '../users.model';
import { AuthResponse, AuthUserOptions } from '../../../lib/types';


const auth = async (options: AuthUserOptions): Promise<AuthResponse> => {
  const { username, password } = options;
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    const user = (await Users.findOne({ username }).session(session)) as User;

    if (!user) {
      throw new Error(`User ${username} does not exist`);
    }

    const success = await bcrypt.compare(password, user.password);
    if (!success) {
      throw new Error('Invalid password');
    }

    await session.commitTransaction();
    await session.endSession();
    return {
      success,
      role: user.role,
    };
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(`Error: ${error.message}`);
  }
};

export default auth;
