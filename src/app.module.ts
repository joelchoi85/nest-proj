import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FilmeController } from './filme/filme.controller';

@Module({
  imports: [],
  controllers: [FilmeController],
  providers: [AppService],
})
export class AppModule {}
