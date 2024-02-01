import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { hashPassword, isValidPassword } from 'src/services/bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { ActivationCodeService } from '../activation-code/activation-code.service';
import { MailService } from '../../services/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private activationCodeService: ActivationCodeService,
    private mailService: MailService,
    private jwtService: JwtService
  ) {}

  async register(dto: CreateUserDto) {
    const { email, password } = dto;
    const candidate = await this.usersService.findByEmail(email);
    if (candidate) {
      throw new HttpException('Email is already taken', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await hashPassword(password);
    const user = await this.usersService.create({ ...dto, password: hashedPassword });
    const activationCode = await this.activationCodeService.create(user.id);

    await this.mailService.sendActivationCode(user.email, activationCode.code);

    const token = this.jwtService.sign({ id: user.id, type: user.type });
    return { user: user, token }; 
  }

  async login(dto: LoginUserDto) {
    const { email, password } = dto;
    const user = await this.usersService.findByEmail(email);
    if (!user || !await isValidPassword(password, user.password)) {
      throw new UnauthorizedException('Email or password incorrect');
    }

    const token = this.jwtService.sign({ id: user.id, type: user.type });
    return { user: user, token };
  }

  async activateUser(userId: number, code: string) {
    try {
      const codeIsValid = await this.activationCodeService.validateCode(userId, code);
      if (!codeIsValid) {
        throw new HttpException('Invalid activation code.', HttpStatus.BAD_REQUEST);
      }

      await this.activationCodeService.delete(userId);
      const user = await this.usersService.activateUser(userId);
      return user;
    } catch (error) {
      throw new HttpException('Failed to activate account.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
