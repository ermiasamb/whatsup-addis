import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePaymentDto, PaymentStatus } from './dto/create-payement.dto';
import { UpdatePaymentDto } from './dto/update-payement.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPaymentDto: CreatePaymentDto) {
    return this.prisma.payments.create({
      data: {
        ...createPaymentDto,
        status: createPaymentDto.status || PaymentStatus.PENDING,
      },
    });
  }

  async findAll() {
    return this.prisma.payments.findMany();
  }

  async findOne(id: string) {
    const payment = await this.prisma.payments.findUnique({ where: { id } });
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    await this.findOne(id); // Ensure payment exists
    return this.prisma.payments.update({
      where: { id },
      data: updatePaymentDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Ensure payment exists
    return this.prisma.payments.delete({ where: { id } });
  }
}
