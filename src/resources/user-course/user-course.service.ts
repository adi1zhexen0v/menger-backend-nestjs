// src/user-course/user-course.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCourseEntity } from './entities/user-course.entity';
import { UserEntity } from '../users/entities/user.entity';
import { CourseEntity } from '../courses/entities/course.entity';

@Injectable()
export class UserCourseService {
  constructor(
    @InjectRepository(UserCourseEntity)
    private userCourseRepository: Repository<UserCourseEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>
  ) { }

  async addUserCourse(userId: number, courseId: number): Promise<UserCourseEntity> {
    // Проверка существования пользователя
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new Error('User not found');
    }

    // Проверка существования курса
    const course = await this.courseRepository.findOneBy({ id: courseId });
    if (!course) {
      throw new Error('Course not found');
    }

    // Создание новой связи между пользователем и курсом
    const userCourse = this.userCourseRepository.create({
      user,
      course,
    });

    return this.userCourseRepository.save(userCourse);
  }
}
