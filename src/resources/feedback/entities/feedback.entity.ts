import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'feedback' })
export class FeedbackEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  message: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
