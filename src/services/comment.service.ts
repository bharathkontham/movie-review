import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from '../entities/comment.entity';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { UpdateCommentDto } from 'src/dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private readonly commentModel: Model<Comment>,
  ) {}

  async create(createCommentInput: CreateCommentDto) {
    return this.commentModel.create(createCommentInput);
  }

  findAll(query?: any) {
    return this.commentModel.find(query);
  }

  async findById(id: string, query?: any): Promise<Comment> {
    query = Object.assign(
      {
        _id: id,
      },
      query,
    );
    const comment = await this.commentModel.findOne(query);
    if (!comment) {
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
    }
    return comment;
  }

  update(id: string, updateCommentInput: UpdateCommentDto) {
    return this.commentModel.findByIdAndUpdate(id, updateCommentInput);
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.commentModel.deleteOne({
      _id: id,
    });
    return result?.deletedCount > 0;
  }
}
