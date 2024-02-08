import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    private jwtService: JwtService
  ) { }

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  getMe(token: string) {
    const decoded = this.jwtService.decode(token);
    return this.repository.findOne({ where: { id: decoded.id } });
  }

  activateUser(id: number) {
    return this.repository.update(id, { isActivated: true });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.repository.update(id, dto);
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  delete(id: number) {
    return this.repository.delete({ id });
  }
}
