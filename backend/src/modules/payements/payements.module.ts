import { Module } from '@nestjs/common';
import { PaymentsService } from './payements.service';
import { PaymentsController } from './payements.controller';
import { PrismaService } from '../../prisma/prisma.service';
@Module({
  providers: [PaymentsService, PrismaService],
  controllers: [PaymentsController],
})
export class PaymentsModule {}
