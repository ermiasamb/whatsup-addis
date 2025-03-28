import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../modules/users/users.service';
import * as bcrypt from 'bcrypt';
import { SignupAuthDto } from './dto/signup-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  // Validate user credentials for login
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    if (user && await bcrypt.compare(pass, user.passwordHash)) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }

  // Handle login logic
  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // Handle sign-up logic
  async signup(signupAuthDto: SignupAuthDto): Promise<any> {
    const { email, password, ...rest } = signupAuthDto;

    // Check if the user already exists
    const existingUser = await this.userService.getUserByEmail(email);
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await this.userService.createUser({
      email,
      passwordHash: hashedPassword,
      ...rest,
    });

    // Return the created user (excluding the password hash)
    const { passwordHash, ...result } = user;
    return result;
  }
}