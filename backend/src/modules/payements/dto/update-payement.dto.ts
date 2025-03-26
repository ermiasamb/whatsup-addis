import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payement.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}
