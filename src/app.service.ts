import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hallo Welt!';
  }
  getHallo(): string {
    return 'Hallo Leute! Freut mich!';
  }
}
