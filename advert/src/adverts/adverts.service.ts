import {Inject, Injectable } from '@nestjs/common';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { Knex } from 'knex';



@Injectable()
export class AdvertsService {
  constructor(@Inject('KnexConnection') private knex: Knex){}
  async create(body: CreateAdvertDto, file:Express.Multer.File): Promise<Record<string, string>> {
      const { sell, buy , url }= body
  
      await this.knex('adverts').insert({advert_sell: sell, advert_buy:buy, advert_url:url})
      return { message: 'success'}
  }

  findAll() {
    return `This action returns all adverts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} advert`;
  }

  update(id: number, updateAdvertDto: UpdateAdvertDto) {
    return `This action updates a #${id} advert`;
  }

  remove(id: number) {
    return `This action removes a #${id} advert`;
  }
}
