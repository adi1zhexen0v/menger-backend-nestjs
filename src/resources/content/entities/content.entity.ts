import { LevelEntity } from 'src/resources/level/entities/level.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'contents' })
export class ContentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  levelId: number;

  @ManyToOne(() => LevelEntity, level => level.contents)
  level: LevelEntity;
}
