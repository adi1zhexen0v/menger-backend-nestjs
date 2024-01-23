import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/services/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>
  ) {}
  
  async create(dto: CreateUserDto) {
    const { password } = dto;
    const hashedPassword = await hashPassword(password);
    dto.password = hashedPassword;

    return this.repository.save(dto);
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  delete(id: number) {
    return this.repository.delete({ id });
  }
}
