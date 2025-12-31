import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  ref: string;

  @IsBoolean()
  @IsOptional()
  isStaff: boolean;

  @IsString()
  @IsNotEmpty()
  platform: string;
}
