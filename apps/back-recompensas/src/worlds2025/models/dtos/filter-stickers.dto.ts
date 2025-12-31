import { IsNumber, IsOptional, Min } from 'class-validator';

export class FilterStickersDTO {
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number;
}
