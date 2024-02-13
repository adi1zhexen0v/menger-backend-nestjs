import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'applications' })
export class ApplicationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  organization: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  text: string;

  @Column()
  isAccepted: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
