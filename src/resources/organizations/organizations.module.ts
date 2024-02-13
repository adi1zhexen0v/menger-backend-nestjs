import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { OrganizationEntity } from './entities/organization.entity';
import { UserEntity } from '../users/entities/user.entity';
import { CourseEntity } from '../courses/entities/course.entity';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
  imports: [TypeOrmModule.forFeature([OrganizationEntity, UserEntity, CourseEntity])],
  exports: [OrganizationsService]
})
export class OrganizationsModule { }
