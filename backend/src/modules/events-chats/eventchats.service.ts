import { Injectable, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateEventChatDto, UpdateEventChatDto } from './DTO/eventchats.dto';

@Injectable()
export class EventChatsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEventChatDto) {
    try {
      return await this.prisma.eventChats.create({ data });
    } catch (error) {
      throw new BadRequestException('Failed to create event chat: ' + error.message);
    }
  }

  async findAll() {
    try {
      const chats = await this.prisma.eventChats.findMany();
      return chats;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve event chats: ' + error.message);
    }
  }

  async findOne(id: string) {
    try {
      const chat = await this.prisma.eventChats.findUnique({ where: { id } });
      if (!chat) throw new NotFoundException('Event chat not found');
      return chat;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to retrieve event chat: ' + error.message);
    }
  }

  async update(id: string, data: UpdateEventChatDto) {
    try {
      await this.findOne(id); // Ensure the chat exists
      return await this.prisma.eventChats.update({ where: { id }, data });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new BadRequestException('Failed to update event chat: ' + error.message);
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id); // Ensure the chat exists
      return await this.prisma.eventChats.delete({ where: { id } });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to delete event chat: ' + error.message);
    }
  }
}
