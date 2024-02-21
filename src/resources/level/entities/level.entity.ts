import { ContentEntity } from 'src/resources/content/entities/content.entity';
import { CourseEntity } from 'src/resources/courses/entities/course.entity';
import { TaskEntity } from 'src/resources/task/entities/task.entity';
import { WordEntity } from 'src/resources/word/entities/word.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => WordEntity, word => word.level)
  words: WordEntity[];

  @OneToMany(() => ContentEntity, content => content.level)
  contents: ContentEntity[];

  @OneToMany(() => TaskEntity, task => task.level)
  tasks: TaskEntity[];
}
