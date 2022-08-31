import { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  description: string;
  isReviewer: boolean;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}
