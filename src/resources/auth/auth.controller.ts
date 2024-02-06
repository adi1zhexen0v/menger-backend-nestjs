import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ActivateUserDto } from './dto/activate-user.dto';
import { StudentGuard } from 'src/guards/student.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @Post('/login')
  login(@Body() dto: LoginUserDto) {
    return this.authService.login(dto);
  }

  @ApiBearerAuth()
  @UseGuards(StudentGuard)
  @Post('/activate')
  activate(@GetUser() user, @Body() dto: ActivateUserDto) {
    return this.authService.activateUser(user.id, dto.activationCode);
  }
}
