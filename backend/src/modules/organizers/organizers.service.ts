import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import { UpdateOrganizerDto } from './dto/update-organizer.dto';

@Injectable()
export class OrganizersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOrganizerDto: CreateOrganizerDto) {
    return this.prisma.organizers.create({
      data: createOrganizerDto,
    });
  }

  findAll() {
    return this.prisma.organizers.findMany();
  }

  findOne(id: string) {
    return this.prisma.organizers.findUnique({
      where: { id },
    });
  }

  update(id: string, updateOrganizerDto: UpdateOrganizerDto) {
    return this.prisma.organizers.update({
      where: { id },
      data: updateOrganizerDto,
    });
  }

  remove(id: string) {
    return this.prisma.organizers.delete({
      where: { id },
    });
  }
}