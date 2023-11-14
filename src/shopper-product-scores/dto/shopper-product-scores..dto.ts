import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ShopperFilter {
  @ApiProperty({
    name: 'limit',
    default: 10,
    type: Number,
    required: false,
    minimum: 1,
    maximum: 100,
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number;

  @ApiProperty({
    name: 'brand',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiProperty({
    name: 'category',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  category?: string;
}

export class ProductFilter {
  @ApiProperty({
    name: 'limit',
    default: 10,
    type: Number,
    required: false,
    minimum: 1,
    maximum: 100,
  })
  @IsNumber()
  @IsOptional()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number = 10;
}

export class ShopperByScore {
  @ApiProperty({
    name: 'shopperId',
    type: String,
  })
  @IsString()
  shopperId?: string;
  @ApiProperty({
    name: 'score',
    type: Number,
  })
  @IsNumber()
  @Type(() => Number)
  score: number;
}

export class ProductByScore {
  @ApiProperty({
    name: 'productId',
    type: String,
  })
  @IsString()
  productId?: string;
  @ApiProperty({
    name: 'score',
    type: Number,
  })
  @IsNumber()
  @Type(() => Number)
  score: number;
}
