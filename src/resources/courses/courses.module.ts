import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { GoogleCloudStorageService } from 'src/services/gcs.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/common/jwt/jwt.config';
import { OrganizationEntity } from '../organizations/entities/organization.entity';
import { LevelEntity } from '../level/entities/level.entity';
import { UserCourseEntity } from '../user-course/entities/user-course.entity';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, GoogleCloudStorageService],
  imports: [
    TypeOrmModule.forFeature([CourseEntity, OrganizationEntity, LevelEntity, UserCourseEntity]),
    JwtModule.register(jwtConfig),
  ],
})
export class CoursesModule { }
