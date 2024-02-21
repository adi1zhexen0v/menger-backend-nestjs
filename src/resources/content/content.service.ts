import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentEntity } from './entities/content.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(ContentEntity)
    private repository: Repository<ContentEntity>
  ) { }

  create(dto: CreateContentDto) {
    return this.repository.save(dto)
  }
}
