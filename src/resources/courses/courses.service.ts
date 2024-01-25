import { Injectable } from '@nestjs/common';
import { CreateOrUpdateCourseDto } from './dto/create-update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { Repository } from 'typeorm';
import { GoogleCloudStorageService } from 'src/services/gsc.service';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private repository: Repository<CourseEntity>,
    private googleCloudStorageService: GoogleCloudStorageService
  ) {}

  async create(dto: CreateOrUpdateCourseDto) {
    const { file, ...rest } = dto;
    const imageUrl = await this.googleCloudStorageService.uploadFile(file, 'courses');

    return this.repository.save({ ...rest, imageUrl });
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, dto: CreateOrUpdateCourseDto) {
    return this.repository.update(id, dto);
  }

  delete(id: number) {
    return this.repository.delete({ id });
  }
}
