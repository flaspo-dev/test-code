import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import {Repository} from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  num = 0;
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  getGoodbye(): string {
    return 'Goodbye World!';
  }
  async new(): Promise<void> {
    const user = this.usersRepository.create();
    user.firstName = 'uuu';
    user.lastName = 'uuui';
    await this.usersRepository.save(user);
  }
}
