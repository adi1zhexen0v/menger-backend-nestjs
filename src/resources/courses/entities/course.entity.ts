import { OrganizationEntity } from 'src/resources/organizations/entities/organization.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
}
