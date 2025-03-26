import { IsNotEmpty, IsUUID, IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsOptional()
  @IsBoolean()
  read?: boolean;
}
