import { ActivationCodeEntity } from 'src/resources/activation-code/entities/activation-code.entity';
import { LevelEntity } from 'src/resources/level/entities/level.entity';
import { OrganizationEntity } from 'src/resources/organizations/entities/organization.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'words' })
export class WordEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kaz: string;

  @Column()
  eng: string;

  @Column()
  imageUrl: string;

  @Column()
  levelId: number;

  @ManyToOne(() => LevelEntity, level => level.words)
  level: LevelEntity;
}
