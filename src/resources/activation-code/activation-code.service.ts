import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivationCodeEntity } from './entities/activation-code.entity';

@Injectable()
export class ActivationCodeService {
  constructor(
    @InjectRepository(ActivationCodeEntity)
    private repository: Repository<ActivationCodeEntity>
  ) {}

  async validateCode(userId: number, code: string): Promise<boolean> {
    const activationCode = await this.repository.findOne({
      where: {
        userId,
        code,
      },
    });

    if (!activationCode) {
      throw new NotFoundException('Activation code not found.');
    }

    if (activationCode.expiresIn && activationCode.expiresIn < new Date()) {
      throw new BadRequestException('Activation code has expired.');
    }

    return true;
  }

  create(userId: number) {
    const code: string = Math.floor(100000 + Math.random() * 999999).toString();
    return this.repository.save({
      userId,
      code,
      expiresIn: new Date(Date.now() + 15 * 60000)
    });
  }

  delete(userId: number) {
    return this.repository.delete({userId});
  }
}
