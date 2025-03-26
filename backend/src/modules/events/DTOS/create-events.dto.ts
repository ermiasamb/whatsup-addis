import { IsString, IsOptional, IsBoolean, IsDate, IsJSON, IsUUID } from 'class-validator';

export class CreateEventDto {
  @IsUUID() eventId: string;
  @IsString() title: string;
  @IsOptional() @IsString() description?: string;
  @IsString() category: string;
  @IsDate() startTime: Date;
  @IsDate() endTime: Date;
  @IsString() location: string;
  @IsOptional() @IsUUID() venueId?: string;
  @IsOptional() @IsJSON() venueDetails?: Record<string, any>;
  @IsOptional() @IsJSON() ticketTypes?: Record<string, any>;
  @IsOptional() @IsJSON() media?: Record<string, any>;
  @IsBoolean() isVirtual: boolean;
  @IsBoolean() blockchainVerified: boolean;
  @IsOptional() @IsUUID() organizersId?: string;
}