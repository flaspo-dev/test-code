import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  num = 0;
  getHello(): number {
    this.num += 1;
    return this.num;
  }
  getGoodbye(): string {
    return 'Goodbye World!';
  }
}
