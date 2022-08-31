import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  private hashIterations = 10;
  async create(createUserDto: CreateUserDto) {
    createUserDto.username = createUserDto.username.toLowerCase();
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      this.hashIterations,
    );
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find().select({ password: 0 });
  }

  findById(id: string) {
    return this.userModel.findById(id).select({ password: 0 });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.userModel.deleteOne({
      _id: id,
    });
    return result?.deletedCount > 0;
  }

  async login(loginInput: LoginUserDto) {
    const user = await this.userModel.findOne({
      username: loginInput.username.toLowerCase(),
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    if (!(await bcrypt.compare(loginInput.password, user.password))) {
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    }
    return 'success';
  }
}
