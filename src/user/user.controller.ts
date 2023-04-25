import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.get();
    // return {
    //   user: 'clockwize',
    //   email: 'clockwize@gmail.com',
    // };
  }

  @Post()
  store(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
    // return req;
  }

  @Get('/:userId')
  getUserDetail(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getDetail(userId);
    // return {
    //   params,
    //   message: 'User Detail',
    // };
  }

  @Delete('/:userId')
  // deleteUser(@Param() params: { userId: number }) {
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
    // return {
    //   params,
    //   message: 'User delete',
    // };
  }

  @Patch('/:userId')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateUserDto, userId);
    // return {
    //   params,
    //   message: 'User update',
    // };
  }
}
