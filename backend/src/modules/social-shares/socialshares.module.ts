import { Module } from '@nestjs/common';
import { SocialSharesService } from './socialshares.service';
import { SocialSharesController } from './socialshares.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [SocialSharesController],
  providers: [SocialSharesService, PrismaService],
})
export class SocialSharesModule {}