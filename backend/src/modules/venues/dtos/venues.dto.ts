import { IsString, IsUUID, IsOptional, IsInt } from 'class-validator';

export class CreateVenueDto {
  @IsString() name: string;
  @IsString() location: string;
  @IsInt() capacity: number;
  @IsOptional() facilities?: Record<string, any>;
  @IsOptional() gallery?: Record<string, any>;
  @IsOptional() @IsString() mapLink?: string;
}

export class UpdateVenueDto {
  @IsOptional() @IsString() name?: string;
  @IsOptional() @IsString() location?: string;
  @IsOptional() @IsInt() capacity?: number;
  @IsOptional() facilities?: Record<string, any>;
  @IsOptional() gallery?: Record<string, any>;
  @IsOptional() @IsString() mapLink?: string;
}
