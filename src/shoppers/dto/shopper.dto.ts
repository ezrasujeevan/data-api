import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShopperDto {
  @ApiProperty({ name: 'id', required: true }) @IsString() id: string;
  @ApiProperty({ name: 'id', required: true }) @IsString() name: string;
}
