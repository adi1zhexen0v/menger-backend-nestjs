import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { hashPassword, isValidPassword } from 'src/services/bcrypt';
import { LoginUserDto } from './dto/login-user';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async register(dto: CreateUserDto) {
    const { email, password } = dto;
    const candidate = await this.usersService.findByEmail(email);
    if (candidate) {
      throw new HttpException('Email is already taken', HttpStatus.BAD_REQUEST)
    }

    const hashedPassword = await hashPassword(password);
    dto.password = hashedPassword;

    const user = await this.usersService.create(dto);
    const token = this.jwtService.sign({ id: user.id, type: user.type });
    return { user, token };
  }

  async login(dto: LoginUserDto) {
    const { email, password } = dto;
    const user = await this.usersService.findByEmail(email);
    if (!await isValidPassword(password, user.password)) {
      throw new UnauthorizedException('Email or password incorrect')
    }

    const token = this.jwtService.sign({ id: user.id, type: user.type });
    return { user, token };
  }
}
