// src/user-course/user-course.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/resources/users/entities/user.entity';
import { CourseEntity } from 'src/resources/courses/entities/course.entity';

@Entity('')
export class UserCourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, user => user.userCourses)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @ManyToOne(() => CourseEntity, course => course.userCourses)
  @JoinColumn({ name: 'courseId' })
  course: CourseEntity;

}
