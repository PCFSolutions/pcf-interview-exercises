/* eslint-disable no-underscore-dangle */
import mongoose, { Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import { UserRole } from '../../lib/types';

export interface UserLean {
  username: string;
  password: string;
  role: UserRole;
  removed: boolean;
  system: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User extends UserLean, Document {}

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      trim: true,
      required: true,
      enum: {
        values: Object.values(UserRole),
        message: 'Invalid role',
      },
    },
    removed: {
      type: Boolean,
      required: true,
      default: false,
      index: true,
    },
    system: {
      type: Boolean,
      required: true,
      default: false,
      index: true,
    },
  },
  { timestamps: true },
);

UserSchema.pre('save', async function (next) {
  const user = this as User;
  if (user.isModified('password')) {
    const hashed = await bcrypt.hash(user.password, 10);
    user.password = hashed;
  }
  next();
});

const model = mongoose.model('User', UserSchema);
export default model;
