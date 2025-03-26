import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { AisecuritylogsService } from './aisecuritylogs.service';
import { CreateAisecuritylogDto } from './dto/create-aisecuritylogs.dto';
import { UpdateAisecuritylogDto } from './dto/update-aisecuritylog.dto';

@Controller('aisecuritylogs')
export class AisecuritylogsController {
  constructor(private readonly aisecuritylogsService: AisecuritylogsService) {}

  @Post()
  async create(@Body() createAisecuritylogDto: CreateAisecuritylogDto) {
    return this.aisecuritylogsService.create(createAisecuritylogDto);
  }

  @Get()
  async findAll() {
    return this.aisecuritylogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.aisecuritylogsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAisecuritylogDto: UpdateAisecuritylogDto) {
    return this.aisecuritylogsService.update(id, updateAisecuritylogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.aisecuritylogsService.remove(id);
  }
}
