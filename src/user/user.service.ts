import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  get() {
    return {
      user: 'clockwize_thet min htin',
      email: 'clockwize@gmail.com',
    };
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  getDetail(userId: number) {
    return {
      userId,
      message: 'User Detail',
    };
  }

  delete(userId: number) {
    return {
      userId,
      message: 'User delete',
    };
  }

  update(updateUserDto: UpdateUserDto, userId: number) {
    return {
      body: updateUserDto,
      params: userId,
    };
  }
}
