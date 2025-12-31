import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Order } from '../enums/order.enum';
import { Sort } from '../enums/sort.enum';

export class FiltersBordersDTO {
  @IsOptional()
  @IsNumber()
  @Min(1)
  page: number;

  @IsOptional()
  @IsString()
  @Length(3, 25)
  name: string;

  @IsEnum(Sort)
  @IsOptional()
  sort: Sort;

  @IsOptional()
  @IsEnum(Order)
  orderBy: Order;
}
