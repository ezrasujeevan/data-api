import { Injectable } from '@nestjs/common';
import { CreateShopperDto } from './dto/create-shopper.dto';
import { UpdateShopperDto } from './dto/update-shopper.dto';

@Injectable()
export class ShoppersService {
  create(createShopperDto: CreateShopperDto) {
    return 'This action adds a new shopper';
  }

  findAll() {
    return `This action returns all shoppers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shopper`;
  }

  update(id: number, updateShopperDto: UpdateShopperDto) {
    return `This action updates a #${id} shopper`;
  }

  remove(id: number) {
    return `This action removes a #${id} shopper`;
  }
}
