import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateEventDto } from './DTOS/create-events.dto';
import { UpdateEventDto } from './DTOS/update-events.dto';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEventDto) {
    try {
      return await this.prisma.events.create({ data });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('An event with this unique identifier already exists');
        }
      }
      throw new InternalServerErrorException('Failed to create event');
    }
  }

  async findAll() {
    try {
      return await this.prisma.events.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch events');
    }
  }

  async findOne(id: string) {
    try {
      const event = await this.prisma.events.findUnique({ where: { id } });
      if (!event) {
        throw new NotFoundException(`Event with ID ${id} not found`);
      }
      return event;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to fetch the event');
    }
  }

  async update(id: string, data: UpdateEventDto) {
    try {
      const existingEvent = await this.prisma.events.findUnique({
        where: { id },
      });
      
      if (!existingEvent) {
        throw new NotFoundException(`Event with ID ${id} not found`);
      }
      
      return await this.prisma.events.update({
        where: { id },
        data,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException('This update violates a unique constraint');
        }
      }
      throw new InternalServerErrorException('Failed to update the event');
    }
  }

  async remove(id: string) {
    try {
      const existingEvent = await this.prisma.events.findUnique({
        where: { id },
      });
      
      if (!existingEvent) {
        throw new NotFoundException(`Event with ID ${id} not found`);
      }
      
      return await this.prisma.events.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to delete the event');
    }
  }
}
