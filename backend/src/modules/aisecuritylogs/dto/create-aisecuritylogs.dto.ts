import { IsString, IsOptional } from 'class-validator';

export class CreateAisecuritylogDto {
  @IsString()
  eventId: string;

  @IsOptional()
  @IsString()
  userId?: string;

  @IsString()
  logType: string;

  @IsString()
  logMessage: string;
}