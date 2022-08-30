import mongoose from 'mongoose';

export const FilmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    releaseDate: Date,
    rating: Number,
    review: String,
    country: String,
    genre: String,
    photo: String,
    reviewerId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
