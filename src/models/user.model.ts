import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    IsReviewer: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
