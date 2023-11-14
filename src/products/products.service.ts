import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findFirst({ where: { id } });
  }

  remove(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }
}
