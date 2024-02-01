import { Module } from '@nestjs/common';
import { ActivationCodeService } from './activation-code.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivationCodeEntity } from './entities/activation-code.entity';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ActivationCodeEntity])],
  providers: [ActivationCodeService],
  exports: [ActivationCodeService]
})
export class ActivationCodeModule {}
