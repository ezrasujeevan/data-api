import { Module } from '@nestjs/common';
import { ShoppersService } from './shoppers.service';
import { ShoppersController } from './shoppers.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [ShoppersController],
  providers: [ShoppersService],
})
export class ShoppersModule {}
