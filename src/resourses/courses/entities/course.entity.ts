import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
}
