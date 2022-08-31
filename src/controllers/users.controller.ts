import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateUserSchema,
  LoginSchema,
  UserReponseSchema,
} from '../schemas/user.schema';
import { User } from 'src/entities/user.entity';
import { LoginUserDto } from 'src/dto/login-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiTags('User')
  @ApiBody({ schema: CreateUserSchema })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiTags('User')
  @ApiResponse({
    schema: {
      type: 'array',
      items: UserReponseSchema,
    },
  })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiTags('User')
  @ApiResponse({ schema: UserReponseSchema })
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiTags('User')
  @ApiResponse({ schema: UserReponseSchema })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiTags('User')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.usersService.remove(id);
  }

  @Post('/login')
  @ApiTags('User')
  @ApiBody({ schema: LoginSchema })
  async login(@Body() loginInput: LoginUserDto) {
    return this.usersService.login(loginInput);
  }
}
