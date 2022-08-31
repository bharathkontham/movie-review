import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FilmSchema } from './models/film.model';
import { UserSchema } from './models/user.model';
import { CommentSchema } from './models/comment.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { FilmController } from './controllers/film.controller';
import { FilmService } from './services/film.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URL'),
      }),
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
        collection: 'users',
      },
      {
        name: 'Film',
        schema: FilmSchema,
        collection: 'films',
      },
      {
        name: 'Comment',
        schema: CommentSchema,
        collection: 'comments',
      },
    ]),
  ],
  controllers: [AppController, UsersController, FilmController],
  providers: [AppService, UsersService, FilmService],
})
export class AppModule {}
