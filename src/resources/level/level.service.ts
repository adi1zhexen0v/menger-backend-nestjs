import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LevelEntity } from './entities/level.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LevelService {
  constructor(
    @InjectRepository(LevelEntity)
    private repository: Repository<LevelEntity>
  ) { }

  create(dto: CreateLevelDto) {
    return this.repository.save(dto);
  }

  update(id: number, dto: CreateLevelDto) {
    return this.repository.update(id, dto);
  }
}
