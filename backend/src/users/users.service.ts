import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/uptade-user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  create(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, dto: UpdateUserDto) {
    return this.userRepository.update(id, dto);
  }

  remove(id: string) {
    return this.userRepository.remove(id);
  }
}