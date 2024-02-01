import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from './entities/application.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/common/jwt/jwt.config';

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
  imports: [TypeOrmModule.forFeature([ApplicationEntity]), JwtModule.register(jwtConfig)]
})
export class ApplicationsModule {}
