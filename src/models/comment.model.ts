import mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema(
  {
    filmId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    comment: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
