import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateUserSchema,
  LoginSchema,
  UserReponseSchema,
} from '../schemas/user.schema';
import { User } from '../entities/user.entity';
import { LoginUserDto } from '../dto/login-user.dto';
import { JwtGuard } from '../auth/jwt.guard';
import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/role.decorator';
import { Role } from '../enums/role.enum';

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
  @ApiBearerAuth('access-token')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.REVIEWER)
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiTags('User')
  @ApiResponse({ schema: UserReponseSchema })
  async findById(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  @Post('/login')
  @ApiTags('User')
  @ApiBody({ schema: LoginSchema })
  async login(@Body() loginInput: LoginUserDto) {
    return this.usersService.login(loginInput);
  }
}
