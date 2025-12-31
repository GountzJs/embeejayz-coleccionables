import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetStickersDTO {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
