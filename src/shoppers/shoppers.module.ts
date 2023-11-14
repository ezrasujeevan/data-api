import { Module } from '@nestjs/common';
import { ShoppersService } from './shoppers.service';
import { ShoppersController } from './shoppers.controller';

@Module({
  controllers: [ShoppersController],
  providers: [ShoppersService],
})
export class ShoppersModule {}
