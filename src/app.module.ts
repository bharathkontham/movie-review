import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FilmSchema } from './models/film.model';
import { UserSchema } from './models/user.model';
import { CommentSchema } from './models/comment.model';
import { MongooseModule } from '@nestjs/mongoose';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
