import { Document } from 'mongoose';

export interface Film extends Document {
  name: string;
  description: string;
  releaseDate: Date;
  rating: number;
  review: string;
  country: string;
  genre: string;
  reviewerId: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
}
