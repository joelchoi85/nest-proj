import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('filme')
export class FilmeController {
  @Get()
  getAll() {
    return 'Diese gibt alle Filme züruck.';
  }
  @Get('search')
  suchen(@Query('year') year: string) {
    return `Wir suchen nach einige Filmen aus dem Jahr ${year} und darüber hinaus.`;
  }

  @Get('/:id')
  getOneFilm(@Param('id') filmId: string) {
    return `Diese Function gibt den Film züruck, dessen ID ${filmId} ist.`;
  }

  @Post()
  create(@Body() filmData: any) {
    console.log(filmData);
    return filmData;
  }

  @Delete('/:id')
  removeFilm(@Param('id') filmId: string) {
    return `delete Film ${filmId}`;
  }
  @Patch('/:id')
  patch(@Param('id') filmId: string, @Body() updateData: any) {
    return {
      updatedFilm: filmId,
      ...updateData,
    };
  }
}
