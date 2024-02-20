import { ActivationCodeEntity } from 'src/resources/activation-code/entities/activation-code.entity';
import { CourseEntity } from 'src/resources/courses/entities/course.entity';
import { OrganizationEntity } from 'src/resources/organizations/entities/organization.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'levels' })
export class LevelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseId: number;

  @Column()
  name: string;

  @ManyToOne(() => CourseEntity, course => course.levels)
  course: CourseEntity;
}
