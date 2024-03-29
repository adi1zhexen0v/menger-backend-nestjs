import { ActivationCodeEntity } from 'src/resources/activation-code/entities/activation-code.entity';
import { CourseEntity } from 'src/resources/courses/entities/course.entity';
import { OrganizationEntity } from 'src/resources/organizations/entities/organization.entity';
import { UserCourseEntity } from 'src/resources/user-course/entities/user-course.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type: 'student' | 'manager' | 'admin';

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ default: 0 })
  points?: number;

  @Column({ default: false })
  isActivated: boolean;

  @Column({ nullable: true })
  organizationId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @OneToOne(() => ActivationCodeEntity, (activationCode) => activationCode.user)
  activationCode: ActivationCodeEntity;

  @ManyToOne(() => OrganizationEntity, organization => organization.users)
  organization: OrganizationEntity;

  @OneToMany(() => UserCourseEntity, userCourse => userCourse.user)
  userCourses: UserCourseEntity[];
}
