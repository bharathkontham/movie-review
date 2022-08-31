import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Film } from '../entities/film.entity';
import {
  CreateFilmSchema,
  FilmReponseSchema,
  UpdateFilmSchema,
} from '../schemas/film.schema';
import { FilmService } from 'src/services/film.service';
import { CreateFilmDto } from 'src/dto/create-film.dto';
import { UpdateFilmDto } from 'src/dto/update-film.dto';

@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  @ApiTags('Film')
  @ApiBody({ schema: CreateFilmSchema })
  create(@Body() createFilmInput: CreateFilmDto) {
    return this.filmService.create(createFilmInput);
  }

  @Get()
  @ApiTags('Film')
  @ApiResponse({
    schema: {
      type: 'array',
      items: FilmReponseSchema,
    },
  })
  async findAll(): Promise<Film[]> {
    return this.filmService.findAll();
  }

  @Get(':id')
  @ApiTags('Film')
  @ApiResponse({ schema: FilmReponseSchema })
  async findOne(@Param('id') id: string): Promise<Film> {
    return this.filmService.findOne(id);
  }

  @Patch(':id')
  @ApiTags('Film')
  @ApiResponse({ schema: FilmReponseSchema })
  @ApiBody({ schema: UpdateFilmSchema })
  update(@Param('id') id: string, @Body() updateFilmInput: UpdateFilmDto) {
    return this.filmService.update(id, updateFilmInput);
  }

  @Delete(':id')
  @ApiTags('Film')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.filmService.remove(id);
  }
}
