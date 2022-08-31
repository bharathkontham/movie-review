import { Document } from 'mongoose';

export interface Comment extends Document {
  filmId: string;
  userId: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
