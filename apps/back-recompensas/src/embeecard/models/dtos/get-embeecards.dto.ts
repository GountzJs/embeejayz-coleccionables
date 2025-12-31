import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetEmbeeCardsDTO {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
