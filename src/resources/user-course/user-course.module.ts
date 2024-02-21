import { Module } from '@nestjs/common';
import { UserCourseService } from './user-course.service';
import { UserCourseController } from './user-course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCourseEntity } from './entities/user-course.entity';
import { UserEntity } from '../users/entities/user.entity';
import { CourseEntity } from '../courses/entities/course.entity';

@Module({
  controllers: [UserCourseController],
  providers: [UserCourseService],
  imports: [
    TypeOrmModule.forFeature([UserCourseEntity, UserEntity, CourseEntity])
  ]
})
export class UserCourseModule { }
