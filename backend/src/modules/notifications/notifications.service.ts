import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createNotificationDto: CreateNotificationDto) {
    return this.prisma.notifications.create({
      data: {
        ...createNotificationDto,
        read: createNotificationDto.read ?? false,
      },
    });
  }

  async findAll() {
    return this.prisma.notifications.findMany();
  }

  async findOne(id: string) {
    const notification = await this.prisma.notifications.findUnique({ where: { id } });
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }
    return notification;
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto) {
    await this.findOne(id); // Ensure notification exists
    return this.prisma.notifications.update({
      where: { id },
      data: updateNotificationDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Ensure notification exists
    return this.prisma.notifications.delete({ where: { id } });
  }
}
