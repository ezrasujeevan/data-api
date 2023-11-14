import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ShoppersService } from './shoppers.service';
import { CreateShopperDto } from './dto/shopper.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shoppers')
@Controller('shoppers')
export class ShoppersController {
  constructor(private readonly shoppersService: ShoppersService) {}

  @Post() create(@Body() createShopperDto: CreateShopperDto) {
    return this.shoppersService.create(createShopperDto);
  }

  @Get() findAll() {
    return this.shoppersService.findAll();
  }

  @Get(':id') findOne(@Param('id') id: string) {
    return this.shoppersService.findOne(id);
  }

  @Delete(':id') remove(@Param('id') id: string) {
    return this.shoppersService.remove(id);
  }
}
