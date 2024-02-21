import { LevelEntity } from 'src/resources/level/entities/level.entity';
import { OrganizationEntity } from 'src/resources/organizations/entities/organization.entity';
import { UserCourseEntity } from 'src/resources/user-course/entities/user-course.entity';
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'courses' })
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  imageUrl: string;

  @Column({ default: true })
  isPublic: boolean;

  @Column({ nullable: true })
  organizationId: number;

  @Column({ nullable: true })
  benefits: string;

  @OneToOne(() => OrganizationEntity, organization => organization.course)
  organization: OrganizationEntity;

  @OneToMany(() => LevelEntity, level => level.course)
  levels: LevelEntity[];

  @OneToMany(() => UserCourseEntity, userCourse => userCourse.course)
  userCourses: UserCourseEntity[];
}
