import { PartialType } from '@nestjs/swagger';
import { CreateShopperDto } from './create-shopper.dto';

export class UpdateShopperDto extends PartialType(CreateShopperDto) {}
