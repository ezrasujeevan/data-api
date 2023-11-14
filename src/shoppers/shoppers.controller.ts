import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppersService } from './shoppers.service';
import { CreateShopperDto } from './dto/create-shopper.dto';
import { UpdateShopperDto } from './dto/update-shopper.dto';

@Controller('shoppers')
export class ShoppersController {
  constructor(private readonly shoppersService: ShoppersService) {}

  @Post()
  create(@Body() createShopperDto: CreateShopperDto) {
    return this.shoppersService.create(createShopperDto);
  }

  @Get()
  findAll() {
    return this.shoppersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopperDto: UpdateShopperDto) {
    return this.shoppersService.update(+id, updateShopperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppersService.remove(+id);
  }
}
