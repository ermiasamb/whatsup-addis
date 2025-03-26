import { Module } from '@nestjs/common';
import { OrganizersService } from './organizers.service';
import { OrganizersController } from './organizers.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [OrganizersController],
  providers: [OrganizersService, PrismaService],
})
export class OrganizersModule {}