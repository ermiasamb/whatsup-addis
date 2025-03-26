/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Users } from '@prisma/client'; // Import Users (model name)
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const existingUser = await this.getUserByEmail(createUserDto.email);
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    return this.prisma.users.create({
      data: {
        ...createUserDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async getAllUsers(params: {
    skip?: number;
    take?: number;
    where?: Prisma.UsersWhereInput;
  }): Promise<Users[]> {
    const { skip, take, where } = params;
    return this.prisma.users.findMany({
      skip,
      take,
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getUserById(id: string): Promise<Users> {
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async getUserByEmail(email: string): Promise<Users | null> {
    return this.prisma.users.findUnique({ where: { email } });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    try {
      return await this.prisma.users.update({
        where: { id },
        data: {
          ...updateUserDto,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
      }
      throw error;
    }
  }

  async deleteUser(id: string): Promise<Users> {
    try {
      return await this.prisma.users.delete({ where: { id } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
      }
      throw error;
    }
  }

  async findUserWithRelations(id: string): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: { id },
      include: {
        events: true,
        bookings: true,
        payments: true,
        notifications: true,
        reviews: true,
        socialShares: true,
        eventChats: true,
        organizers: true,
      },
    });
  }

  async countUsers(where?: Prisma.UsersWhereUniqueInput): Promise<number> {
    return this.prisma.users.count({ where });
  }
}
