import { ContentEntity } from 'src/resources/content/entities/content.entity';
import { CourseEntity } from 'src/resources/courses/entities/course.entity';
import { LevelEntity } from 'src/resources/level/entities/level.entity';
import { WordEntity } from 'src/resources/word/entities/word.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kaz: string;

  @Column()
  eng: string;

  @Column()
  uncorrectWords: string;

  @Column()
  levelId: number;

  @ManyToOne(() => LevelEntity, level => level.tasks)
  level: LevelEntity;
}
