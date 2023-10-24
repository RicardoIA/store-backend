import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUser) {
    return createUser;
  }
}
