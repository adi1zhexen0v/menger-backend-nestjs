  import { UserEntity } from "src/resources/users/entities/user.entity";
  import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn  } from "typeorm";

  @Entity({ name: 'activationCodes' })
  export class ActivationCodeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    code: string;

    @Column({ type: 'timestamp', nullable: true })
    expiresIn?: Date;

    @OneToOne(() => UserEntity, (user) => user.activationCode)
    @JoinColumn({ name: 'userId' })
    user: UserEntity;
  }
