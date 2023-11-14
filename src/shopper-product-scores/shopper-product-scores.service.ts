import { Injectable } from '@nestjs/common';
import { Prisma, ShopperProductScore } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import {
  ProductByScore,
  ShopperByScore,
} from './dto/shopper-product-scores..dto';

@Injectable()
export class ShopperProductScoresService {
  constructor(private prisma: PrismaService) {}

  async create(
    data: Prisma.ShopperProductScoreCreateInput,
  ): Promise<ShopperProductScore> {
    return this.prisma.shopperProductScore.create({ data });
  }

  async findAll(): Promise<ShopperProductScore[]> {
    return this.prisma.shopperProductScore.findMany();
  }

  async findShopperById(
    shopperId: string,
    limit: number,
    category?: string,
    brand?: string,
  ) {
    return this.prisma.shopperProductScore.findMany({
      take: limit,
      where: {
        shopperId,
        Product: {
          brand,
          category,
        },
      },
      select: {
        productId: true,
        score: true,
      },
    });
  }

  async findProductById(productId: string, limit: number) {
    return this.prisma.shopperProductScore.findMany({
      take: limit,
      where: {
        productId,
      },
      select: {
        shopperId: true,
        score: true,
      },
    });
  }

  async UpdateScoreByProduct(
    productId: string,
    ShopperScore: ShopperByScore[],
  ) {
    return await Promise.all(
      ShopperScore.map(({ shopperId, score }) => {
        return this.prisma.shopperProductScore.updateMany({
          where: { productId, shopperId },
          data: { score },
        });
      }),
    );
  }

  async UpdateScoreByShopper(
    shopperId: string,
    productScore: ProductByScore[],
  ) {
    return await Promise.all(
      productScore.map(({ productId, score }) => {
        return this.prisma.shopperProductScore.updateMany({
          where: { productId, shopperId },
          data: {
            score,
          },
        });
      }),
    );
  }
}
