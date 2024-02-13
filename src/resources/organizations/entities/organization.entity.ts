import { CourseEntity } from 'src/resources/courses/entities/course.entity';
import { UserEntity } from 'src/resources/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'organizations' })
export class OrganizationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @OneToMany(() => UserEntity, user => user.organization)
  users: UserEntity[];

  @OneToOne(() => CourseEntity, course => course.organization)
  course: CourseEntity;
}
