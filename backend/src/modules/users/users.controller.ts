import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Create a new user
   * @param createUserDto User data
   * @returns Created user
   */
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
    try {
      return await this.userService.createUser(createUserDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  /**
   * Get all users with optional filters (pagination, search)
   * @param skip Number of records to skip
   * @param take Number of records to fetch
   * @returns List of users
   */
  @Get()
  async getAllUsers(
    @Query('skip') skip?: number,
    @Query('take') take?: number,
  ): Promise<Users[]> {
    return await this.userService.getAllUsers({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
    });
  }

  /**
   * Get a user by ID
   * @param id User ID
   * @returns User details
   */
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<Users> {
    const user = await this.userService.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  /**
   * Get a user by Email
   * @param email User email
   * @returns User details
   */
  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<Users | null> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return user;
  }

  /**
   * Update a user's details
   * @param id User ID
   * @param updateUserDto Updated data
   * @returns Updated user details
   */
  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Users> {
    return await this.userService.updateUser(id, updateUserDto);
  }

  /**
   * Delete a user by ID
   * @param id User ID
   * @returns Deleted user details
   */
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<Users> {
    return await this.userService.deleteUser(id);
  }

  /**
   * Get user with related data (events, bookings, etc.)
   * @param id User ID
   * @returns User details with relations
   */
  @Get(':id/relations')
  async findUserWithRelations(@Param('id') id: string): Promise<Users | null> {
    return await this.userService.findUserWithRelations(id);
  }  
  /**
   * Count total users
   * @returns Number of users
   */
  @Get('count')
  async countUsers(): Promise<number> {
    return await this.userService.countUsers();
  }
}
