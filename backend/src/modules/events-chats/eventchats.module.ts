import { Module } from '@nestjs/common';
import { EventChatsService } from './eventchats.service';
import { EventChatsController } from './eventchats.controller';
import { PrismaService } from '../../prisma/prisma.service';  

@Module({
  controllers: [EventChatsController],
  providers: [EventChatsService, PrismaService],
  exports: [EventChatsService],
})
export class EventChatsModule {}