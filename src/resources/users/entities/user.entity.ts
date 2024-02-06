import { ActivationCodeEntity } from 'src/resources/activation-code/entities/activation-code.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
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

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @OneToOne(() => ActivationCodeEntity, (activationCode) => activationCode.user)
  activationCode: ActivationCodeEntity;
}
