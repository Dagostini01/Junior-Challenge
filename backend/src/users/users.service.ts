import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/uptade-user.dto';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {} // 👈 Aqui está o que faltava

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  async create(data: Partial<User>) {
    const user = await this.userRepository.create(data);
    return this.userRepository.save(user);
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
