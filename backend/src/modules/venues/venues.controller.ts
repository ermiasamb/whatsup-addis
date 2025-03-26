import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { CreateVenueDto, UpdateVenueDto } from './dtos/venues.dto';

@Controller('venues')
export class VenuesController {
  private readonly logger = new Logger(VenuesController.name);

  constructor(private readonly venuesService: VenuesService) {}

  @Post()
  async create(@Body() createVenueDto: CreateVenueDto) {
    try {
      this.logger.log('Creating a new venue');
      return await this.venuesService.create(createVenueDto);
    } catch (error) {
      this.logger.error(`Failed to create venue: ${error.message}`, error.stack);
      throw error;
    }
  }

  @Get()
  async findAll() {
    try {
      this.logger.log('Retrieving all venues');
      return await this.venuesService.findAll();
    } catch (error) {
      this.logger.error(`Failed to retrieve venues: ${error.message}`, error.stack);
      throw error;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      this.logger.log(`Retrieving venue with ID: ${id}`);
      return await this.venuesService.findOne(id);
    } catch (error) {
      this.logger.error(`Failed to retrieve venue: ${error.message}`, error.stack);
      throw error;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    try {
      this.logger.log(`Updating venue with ID: ${id}`);
      return await this.venuesService.update(id, updateVenueDto);
    } catch (error) {
      this.logger.error(`Failed to update venue: ${error.message}`, error.stack);
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      this.logger.log(`Deleting venue with ID: ${id}`);
      await this.venuesService.remove(id);
      return { message: `Venue with ID ${id} successfully deleted` };
    } catch (error) {
      this.logger.error(`Failed to delete venue: ${error.message}`, error.stack);
      throw error;
    }
  }
}
