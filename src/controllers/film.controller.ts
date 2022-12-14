import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Film } from '../entities/film.entity';
import {
  CreateFilmSchema,
  FilmReponseSchema,
  UpdateFilmSchema,
} from '../schemas/film.schema';
import { FilmService } from '../services/film.service';
import { CreateFilmDto } from '../dto/create-film.dto';
import { UpdateFilmDto } from '../dto/update-film.dto';
import { CreateCommentDto } from '../dto/create-comment.dto';
import {
  CommentResponseSchema,
  CreateCommentSchema,
} from '../schemas/comment.schema';
import { CommentService } from '../services/comment.service';
import { Comment } from '../entities/comment.entity';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/role.decorator';
import { Role } from '../enums/role.enum';

@Controller('films')
export class FilmController {
  constructor(
    private readonly filmService: FilmService,
    private readonly commentService: CommentService,
  ) {}

  @Post()
  @ApiTags('Film')
  @ApiBody({ schema: CreateFilmSchema })
  @ApiResponse({ schema: FilmReponseSchema })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.REVIEWER)
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
  async findById(@Param('id') id: string): Promise<Film> {
    return this.filmService.findById(id);
  }

  @Patch(':id')
  @ApiTags('Film')
  @ApiResponse({ schema: FilmReponseSchema })
  @ApiBody({ schema: UpdateFilmSchema })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.REVIEWER)
  update(@Param('id') id: string, @Body() updateFilmInput: UpdateFilmDto) {
    return this.filmService.update(id, updateFilmInput);
  }

  @Delete(':id')
  @ApiTags('Film')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.REVIEWER)
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.filmService.remove(id);
  }

  @Post(':id/comment')
  @ApiTags('Film')
  @ApiBody({ schema: CreateCommentSchema })
  @ApiResponse({ schema: CommentResponseSchema })
  @ApiBearerAuth('access-token')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.REVIEWER)
  async createComment(
    @Param('id') id: string,
    @Body() comment: CreateCommentDto,
  ): Promise<Comment> {
    comment.filmId = id;
    return this.commentService.create(comment);
  }

  @Get(':id/comment')
  @ApiTags('Film')
  @ApiResponse({
    schema: {
      type: 'array',
      items: CommentResponseSchema,
    },
  })
  async getCommentsByFilmId(@Param('id') id: string): Promise<Comment[]> {
    return this.commentService.findAll({
      filmId: id,
    });
  }

  @Get(':id/comment/:commentId')
  @ApiTags('Film')
  @ApiResponse({
    schema: {
      type: 'array',
      items: CommentResponseSchema,
    },
  })
  async getCommentByIdByFilmId(
    @Param('id') id: string,
    @Param('commentId') commentId: string,
  ): Promise<Comment> {
    return this.commentService.findById(commentId, {
      filmId: id,
    });
  }
}
