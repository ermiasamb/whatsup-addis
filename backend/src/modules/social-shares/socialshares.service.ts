import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSocialShareDto } from './dto/create-socialshare.dto';
import { UpdateSocialShareDto } from './dto/update-socialshare.dto';
import { SocialShares } from '@prisma/client';

@Injectable()
export class SocialSharesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSocialShareDto: CreateSocialShareDto): Promise<SocialShares> {
    return this.prisma.socialShares.create({
      data: createSocialShareDto,
    });
  }

  findAll(): Promise<SocialShares[]> {
    return this.prisma.socialShares.findMany();
  }

  findOne(id: string): Promise<SocialShares | null> {
    return this.prisma.socialShares.findUnique({
      where: { id },
    });
  }

  update(id: string, updateSocialShareDto: UpdateSocialShareDto): Promise<SocialShares> {
    return this.prisma.socialShares.update({
      where: { id },
      data: updateSocialShareDto,
    });
  }

  remove(id: string): Promise<SocialShares> {
    return this.prisma.socialShares.delete({
      where: { id },
    });
  }
}