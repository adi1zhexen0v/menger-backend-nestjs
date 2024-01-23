import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private repository: Repository<CourseEntity>
  ) {}

  create(dto: CreateCourseDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }
}
