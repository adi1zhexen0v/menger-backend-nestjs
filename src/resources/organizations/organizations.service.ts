import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationEntity } from './entities/organization.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(OrganizationEntity)
    private repository: Repository<OrganizationEntity>
  ) { }

  create(dto: CreateOrganizationDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, dto: CreateOrganizationDto) {
    return this.repository.update(id, dto);
  }

  remove(id: number) {
    return this.repository.delete({ id });
  }
}
