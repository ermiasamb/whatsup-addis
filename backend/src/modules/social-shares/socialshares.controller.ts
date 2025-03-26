import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialSharesService } from './socialshares.service';
import { CreateSocialShareDto } from './dto/create-socialshare.dto';
import { UpdateSocialShareDto } from './dto/update-socialshare.dto';
import { SocialShares } from '@prisma/client';

@Controller('socialshares')
export class SocialSharesController {
  constructor(private readonly socialSharesService: SocialSharesService) {}

  @Post()
  async create(@Body() createSocialShareDto: CreateSocialShareDto): Promise<SocialShares> {
    return this.socialSharesService.create(createSocialShareDto);
  }

  @Get()
  async findAll(): Promise<SocialShares[]> {
    return this.socialSharesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SocialShares | null> {
    return this.socialSharesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSocialShareDto: UpdateSocialShareDto): Promise<SocialShares> {
    return this.socialSharesService.update(id, updateSocialShareDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<SocialShares> {
    return this.socialSharesService.remove(id);
  }
}