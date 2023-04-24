import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'supertest';

@Controller('user')
export class UserController {
  @Get()
  getUser() {
    return {
      user: 'clockwize',
      email: 'clockwize@gmail.com',
    };
  }

  @Post()
  store(@Req() req: Request) {
    return req;
  }

  @Get('/:userId')
  getUserDetail(@Param() params: { userId: number }) {
    return {
      params,
      message: 'User Detail',
    };
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return {
      params,
      message: 'User delete',
    };
  }

  @Patch('/:userId')
  updateUser(@Param() params: { userId: number }) {
    return {
      params,
      message: 'User update',
    };
  }
}
