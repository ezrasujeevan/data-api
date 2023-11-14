import { Module } from '@nestjs/common';
import { ShopperProductScoresService } from './shopper-product-scores.service';
import { ShopperProductScoresController } from './shopper-product-scores.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ShopperProductScoresController],
  providers: [ShopperProductScoresService],
})
export class ShopperProductScoresModule {}
