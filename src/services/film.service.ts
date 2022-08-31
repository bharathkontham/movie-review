import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film } from '../entities/film.entity';
import { CreateFilmDto } from 'src/dto/create-film.dto';
import { UpdateFilmDto } from 'src/dto/update-film.dto';

@Injectable()
export class FilmService {
  constructor(@InjectModel('Film') private readonly filmModel: Model<Film>) {}

  async create(createFilmInput: CreateFilmDto) {
    return this.filmModel.create(createFilmInput);
  }

  findAll() {
    return this.filmModel.find().select({ password: 0 });
  }

  findOne(id: string) {
    return this.filmModel.findById(id).select({ password: 0 });
  }

  update(id: string, updateFilmInput: UpdateFilmDto) {
    return this.filmModel.findByIdAndUpdate(id, updateFilmInput);
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.filmModel.deleteOne({
      _id: id,
    });
    return result?.deletedCount > 0;
  }
}
