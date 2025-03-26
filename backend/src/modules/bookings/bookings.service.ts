import { Injectable, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBookingDto: CreateBookingDto) {
    try {
      return await this.prisma.bookings.create({
        data: createBookingDto,
        include: {
          user: true,
          event: true,
          payment: true,
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error creating booking: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.prisma.bookings.findMany({
        include: {
          user: true,
          event: true,
          payment: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving bookings: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      const booking = await this.prisma.bookings.findUnique({
        where: { id },
        include: {
          user: true,
          event: true,
          payment: true,
        },
      });
      if (!booking) {
        throw new NotFoundException(`Booking with ID ${id} not found`);
      }
      return booking;
    } catch (error) {
      throw new InternalServerErrorException(`Error retrieving booking: ${error.message}`);
    }
  }

  async update(id: string, updateBookingDto: UpdateBookingDto) {
    try {
      const existingBooking = await this.prisma.bookings.findUnique({ where: { id } });
      if (!existingBooking) {
        throw new NotFoundException(`Booking with ID ${id} not found`);
      }
      return await this.prisma.bookings.update({
        where: { id },
        data: updateBookingDto,
        include: {
          user: true,
          event: true,
          payment: true,
        },
      });
    } catch (error) {
      throw new BadRequestException(`Error updating booking: ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      const existingBooking = await this.prisma.bookings.findUnique({ where: { id } });
      if (!existingBooking) {
        throw new NotFoundException(`Booking with ID ${id} not found`);
      }
      return await this.prisma.bookings.delete({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(`Error deleting booking: ${error.message}`);
    }
  }
}
