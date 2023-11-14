import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateShopperDto } from './dto/shopper.dto';

@Injectable()
export class ShoppersService {
  constructor(private prisma: PrismaService) {}
  async create(createShopperDto: CreateShopperDto) {
    return this.prisma.shopper.create({ data: createShopperDto });
  }

  async findAll() {
    return this.prisma.shopper.findMany();
  }

  async findOne(id: string) {
    return this.prisma.shopper.findFirst({ where: { id } });
  }

  remove(id: string) {
    return this.prisma.shopper.delete({ where: { id } });
  }
}
