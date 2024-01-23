import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn  } from "typeorm";

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
  type: "student" | "manager" | "admin";

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ default: 0 })
  points?: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
