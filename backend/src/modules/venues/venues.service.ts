import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateVenueDto, UpdateVenueDto } from './dtos/venues.dto';

@Injectable()
export class VenuesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateVenueDto) {
    try {
      return await this.prisma.venues.create({ data });
    } catch (error) {
      throw new BadRequestException(`Error creating venue: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.prisma.venues.findMany();
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving venues: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      const venue = await this.prisma.venues.findUnique({ where: { id } });
      if (!venue) throw new NotFoundException(`Venue with ID ${id} not found`);
      return venue;
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving venue: ${error.message}`);
    }
  }

  async update(id: string, data: UpdateVenueDto) {
    await this.findOne(id); // Ensure the venue exists
    try {
      return await this.prisma.venues.update({ where: { id }, data });
    } catch (error) {
      throw new BadRequestException(`Error updating venue: ${error.message}`);
    }
  }

  async remove(id: string) {
    await this.findOne(id); // Ensure the venue exists
    try {
      return await this.prisma.venues.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(`Error deleting venue: ${error.message}`);
    }
  }
}