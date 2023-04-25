import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  get(): Promise<User[]> {
    return this.userRepository.find();
    // return {
    //   user: 'clockwize_thet min htin',
    //   email: 'clockwize@gmail.com',
    // };
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
