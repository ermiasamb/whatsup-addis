import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto} from './DTOS/create-events.dto';
import { UpdateEventDto } from './DTOS/update-events.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    // Creates a new event with the provided data
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    // Retrieves all events
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Retrieves a specific event by ID
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    // Updates an existing event with the provided data
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // Removes an event by ID
    return this.eventsService.remove(id);
  }
}