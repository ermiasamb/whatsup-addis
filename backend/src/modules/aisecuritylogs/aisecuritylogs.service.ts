import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAisecuritylogDto } from './dto/create-aisecuritylogs.dto';
import { UpdateAisecuritylogDto } from './dto/update-aisecuritylog.dto';
@Injectable()
export class AisecuritylogsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAisecuritylogDto: CreateAisecuritylogDto) {
    try {
      return await this.prisma.aisecuritylogs.create({
        data: createAisecuritylogDto,
        include: { event: true, user: true },
      });
    } catch (error) {
      throw new BadRequestException(`Error creating AI security log: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.prisma.aisecuritylogs.findMany({ include: { event: true, user: true } });
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving AI security logs: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      const log = await this.prisma.aisecuritylogs.findUnique({ where: { id }, include: { event: true, user: true } });
      if (!log) throw new NotFoundException(`AI security log with ID ${id} not found`);
      return log;
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving AI security log: ${error.message}`);
    }
  }

  async update(id: string, updateAisecuritylogDto: UpdateAisecuritylogDto) {
    try {
      const existingLog = await this.prisma.aisecuritylogs.findUnique({ where: { id } });
      if (!existingLog) throw new NotFoundException(`AI security log with ID ${id} not found`);
      return await this.prisma.aisecuritylogs.update({ where: { id }, data: updateAisecuritylogDto, include: { event: true, user: true } });
    } catch (error) {
      throw new BadRequestException(`Error updating AI security log: ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      const existingLog = await this.prisma.aisecuritylogs.findUnique({ where: { id } });
      if (!existingLog) throw new NotFoundException(`AI security log with ID ${id} not found`);
      return await this.prisma.aisecuritylogs.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(`Error deleting AI security log: ${error.message}`);
    }
  }
}
