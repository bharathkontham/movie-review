export class CreateFilmDto {
  name: string;
  description: string;
  releaseDate: Date;
  rating: number;
  review: string;
  country: string;
  genre: string;
  reviewerId?: string;
  photo: string;
}
