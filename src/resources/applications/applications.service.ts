import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplicationEntity } from './entities/application.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(ApplicationEntity)
    private repository: Repository<ApplicationEntity>
  ) {}


  create(dto: CreateApplicationDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }
}
