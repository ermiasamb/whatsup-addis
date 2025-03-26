import { IsString, IsDate } from 'class-validator';

export class CreateSocialShareDto {
  @IsString()
  userId: string;

  @IsString()
  eventId: string;

  @IsString()
  platform: string;

  @IsDate()
  sharedAt: Date;
}