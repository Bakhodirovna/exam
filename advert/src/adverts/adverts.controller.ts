import { Controller, Get, Post, Body, Patch, Param, Delete ,UseInterceptors, UploadedFile, UploadedFiles} from '@nestjs/common';
import { AdvertsService } from './adverts.service';
import { CreateAdvertDto } from './dto/create-advert.dto';
import {diskStorage} from 'multer'
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import {v4} from 'uuid';
import { extname } from 'path';

@Controller('advert')
export class AdvertsController {
  constructor(private readonly advertsService: AdvertsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('advert_picture', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          return cb(null, v4() + extname(file.originalname));
        },
      }),
    }),
  )
  create(@Body() createAdvertDto: CreateAdvertDto, @UploadedFile() file: Express.Multer.File) {
    return this.advertsService.create(createAdvertDto, file);
  }

  @Get()
  findAll() {
    return this.advertsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdvertDto: UpdateAdvertDto) {
    return this.advertsService.update(+id, updateAdvertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advertsService.remove(+id);
  }
}
