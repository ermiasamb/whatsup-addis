import { IsString, IsNumber, IsOptional, IsIn } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  userId: string;

  @IsString()
  eventId: string;

  @IsString()
  paymentId: string;

  @IsString()
  ticketType: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  totalPrice: number;

  @IsOptional()
  @IsString()
  @IsIn(['Pending', 'Confirmed', 'Cancelled'])
  status?: string;
}