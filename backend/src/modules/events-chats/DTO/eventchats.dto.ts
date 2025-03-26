import { IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateEventChatDto {
  @IsUUID() eventId: string;
  @IsUUID() userId: string;
  @IsString() message: string;
  @IsOptional() @IsString() messageType?: string;
}

export class UpdateEventChatDto {
  @IsOptional() @IsString() message?: string;
  @IsOptional() @IsString() messageType?: string;
}
