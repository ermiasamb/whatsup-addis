import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReviewDto: CreateReviewDto) {
    return this.prisma.reviews.create({
      data: createReviewDto,
    });
  }

  async findAll() {
    return this.prisma.reviews.findMany();
  }

  async findOne(id: string) {
    const review = await this.prisma.reviews.findUnique({ where: { id } });
    if (!review) {
      throw new NotFoundException(`Review with ID ${id} not found`);
    }
    return review;
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    await this.findOne(id); // Ensure review exists
    return this.prisma.reviews.update({
      where: { id },
      data: updateReviewDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Ensure review exists
    return this.prisma.reviews.delete({ where: { id } });
  }
}
