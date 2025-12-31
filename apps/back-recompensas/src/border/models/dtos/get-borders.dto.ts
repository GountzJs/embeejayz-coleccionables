import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetBordersDTO {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;
}
