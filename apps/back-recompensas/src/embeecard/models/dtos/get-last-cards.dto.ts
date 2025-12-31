import { IsNotEmpty, IsString } from 'class-validator';

export class GetLastCardsDTO {
  @IsString()
  @IsNotEmpty()
  ref: string;
}
