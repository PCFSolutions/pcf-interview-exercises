import mongoose, { Document, Schema } from 'mongoose';

export interface LocationLean {
  _id?: string;
  name: string;
  removed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Location extends Document {
  name: string;
  removed: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      index: true,
    },
    removed: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  { timestamps: true },
);

const model = mongoose.model('Location', schema);
export default model;
