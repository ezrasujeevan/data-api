import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ name: 'id', required: true })
  @IsString()
  id: string;

  @ApiProperty({ name: 'brand', required: true })
  @IsString()
  brand: string;

  @ApiProperty({ name: 'category', required: true })
  @IsString()
  category: string;
}
