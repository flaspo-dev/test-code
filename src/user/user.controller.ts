import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
import { UserService } from './user.service';
import {User} from "./user.entity";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return 'HelloWorld';
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
