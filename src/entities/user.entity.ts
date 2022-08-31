export class User {
  _id: string;
  name: string;
  description: string;
  isReviewer: boolean;
  username: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
}
