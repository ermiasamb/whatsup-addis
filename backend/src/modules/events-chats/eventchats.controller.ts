import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { EventChatsService } from './eventchats.service';
import { CreateEventChatDto, UpdateEventChatDto } from './DTO/eventchats.dto';

@Controller('event-chats')
export class EventChatsController {
  private readonly logger = new Logger(EventChatsController.name);
  constructor(private readonly eventChatsService: EventChatsService) {}

  @Post()
  async create(@Body() createEventChatDto: CreateEventChatDto) {
    try {
      return await this.eventChatsService.create(createEventChatDto);
    } catch (error) {
      this.logger.error(`Failed to create event chat: ${error.message}`, error.stack);
      throw new HttpException(
        error.message || 'Failed to create event chat',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.eventChatsService.findAll();
    } catch (error) {
      this.logger.error(`Failed to fetch event chats: ${error.message}`, error.stack);
      throw new HttpException(
        error.message || 'Failed to fetch event chats',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      if (!id) {
        throw new HttpException('Event chat ID is required', HttpStatus.BAD_REQUEST);
      }
      
      const eventChat = await this.eventChatsService.findOne(id);
      
      if (!eventChat) {
        throw new HttpException(`Event chat with ID ${id} not found`, HttpStatus.NOT_FOUND);
      }
      
      return eventChat;
    } catch (error) {
      this.logger.error(`Failed to fetch event chat with ID ${id}: ${error.message}`, error.stack);
      throw new HttpException(
        error.message || `Failed to fetch event chat with ID ${id}`,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEventChatDto: UpdateEventChatDto) {
    try {
      if (!id) {
        throw new HttpException('Event chat ID is required', HttpStatus.BAD_REQUEST);
      }
      
      const updatedEventChat = await this.eventChatsService.update(id, updateEventChatDto);
      
      if (!updatedEventChat) {
        throw new HttpException(`Event chat with ID ${id} not found`, HttpStatus.NOT_FOUND);
      }
      
      return updatedEventChat;
    } catch (error) {
      this.logger.error(`Failed to update event chat with ID ${id}: ${error.message}`, error.stack);
      throw new HttpException(
        error.message || `Failed to update event chat with ID ${id}`,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      if (!id) {
        throw new HttpException('Event chat ID is required', HttpStatus.BAD_REQUEST);
      }
      
      const result = await this.eventChatsService.remove(id);
      
      if (!result) {
        throw new HttpException(`Event chat with ID ${id} not found`, HttpStatus.NOT_FOUND);
      }
      
      return { message: `Event chat with ID ${id} successfully deleted` };
    } catch (error) {
      this.logger.error(`Failed to delete event chat with ID ${id}: ${error.message}`, error.stack);
      throw new HttpException(
        error.message || `Failed to delete event chat with ID ${id}`,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
