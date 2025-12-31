import { IsNotEmpty, IsString, Length } from 'class-validator';

export class ProfileDTO {
  @IsString()
  @Length(3, 60)
  @IsNotEmpty()
  username: string;
}
