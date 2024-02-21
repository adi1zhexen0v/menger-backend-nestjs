import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { ActivationCodeEntity } from '../activation-code/entities/activation-code.entity';
import { OrganizationEntity } from '../organizations/entities/organization.entity';
import { MailService } from 'src/services/mail.service';
import { OrganizationsModule } from '../organizations/organizations.module';
import { UserCourseEntity } from '../user-course/entities/user-course.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService, MailService],
  imports: [TypeOrmModule.forFeature([UserEntity, ActivationCodeEntity, OrganizationEntity, UserCourseEntity]), OrganizationsModule],
  exports: [UsersService],
})
export class UsersModule { }
