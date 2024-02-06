import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { ActivationCodeEntity } from '../activation-code/entities/activation-code.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([UserEntity, ActivationCodeEntity])],
  exports: [UsersService],
})
export class UsersModule {}
