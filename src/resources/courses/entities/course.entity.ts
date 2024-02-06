import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  benefits: string;
}
