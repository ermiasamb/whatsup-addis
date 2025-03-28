import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupAuthDto } from './dto/signup-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupAuthDto: SignupAuthDto) {
    return this.authService.signup(signupAuthDto);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() loginAuthDto: LoginAuthDto) {
    // Validate the login credentials using the AuthService
    const user = await this.authService.validateUser(
      loginAuthDto.email,
      loginAuthDto.password,
    );

    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Generate and return the JWT token
    return this.authService.login(user);
  }
}