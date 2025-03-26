import { Module } from '@nestjs/common';
import { AisecuritylogsService } from './aisecuritylogs.service';
import { AisecuritylogsController } from './aisecuritylogs.controller';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  controllers: [AisecuritylogsController],
  providers: [AisecuritylogsService, PrismaService],
})
export class AisecuritylogsModule {}
