import { IsString, IsOptional, IsJSON } from 'class-validator';

export class CreateOrganizerDto {
  @IsString()
  userId: string;

  @IsString()
  organizationName: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsJSON()
  socialLinks?: any;
}