import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { UserService } from './user.service';
import {User} from "./user.entity";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/bye')
  getGoodbye(): string {
    return this.userService.getGoodbye();
  }

  @Get('/new')
  new(): Promise<void> {
    return this.userService.new();
  }
}
