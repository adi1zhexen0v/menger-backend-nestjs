import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { ActivationCodeModule } from '../activation-code/activation-code.module';
import { MailService } from '../../services/mail.service';
import { jwtConfig } from 'src/common/jwt/jwt.config';

@Module({
  imports: [
    UsersModule,
    ActivationCodeModule,
    JwtModule.register(jwtConfig),
  ],
  controllers: [AuthController],
  providers: [AuthService, MailService],
  exports: [AuthService]
})
export class AuthModule {}
