import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ShopperProductScoresService } from './shopper-product-scores.service';
import {
  ProductByScore,
  ProductFilter,
  ShopperByScore,
  ShopperFilter,
} from './dto/shopper-product-scores..dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('score')
@Controller('shopper-product-scores')
export class ShopperProductScoresController {
  constructor(
    private readonly shopperProductScoresService: ShopperProductScoresService,
  ) {}

  @Get('all')
  async findAll() {
    return this.shopperProductScoresService.findAll();
  }

  @Get('shopper/:id')
  async findShopperById(
    @Param('id') id: string,
    @Query() shopperFilter: ShopperFilter,
  ) {
    const { category, brand, limit } = shopperFilter;
    return this.shopperProductScoresService.findShopperById(
      id,
      limit,
      category,
      brand,
    );
  }

  @Get('product/:id')
  async findProductById(
    @Param('id') id: string,
    @Query() productFilter: ProductFilter,
  ) {
    const { limit } = productFilter;
    return this.shopperProductScoresService.findProductById(id, limit);
  }

  @Post('product/:id')
  @ApiBody({ required: true, type: ShopperByScore, isArray: true })
  async UpdateByProductId(
    @Param('id') id: string,
    @Body() shopperByScores: ShopperByScore[],
  ) {
    return await this.shopperProductScoresService.UpdateScoreByProduct(
      id,
      shopperByScores,
    );
  }

  @Post('shopper/:id')
  @ApiBody({ required: true, type: ProductByScore, isArray: true })
  async UpdateByShopperId(
    @Param('id') id: string,
    @Body() productByScore: ProductByScore[],
  ) {
    return await this.shopperProductScoresService.UpdateScoreByShopper(
      id,
      productByScore,
    );
  }
}
