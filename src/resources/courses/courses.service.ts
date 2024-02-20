import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrUpdateCourseDto } from './dto/create-update-course.dto';
import { CourseEntity } from './entities/course.entity';
import { GoogleCloudStorageService } from 'src/services/gcs.service';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private repository: Repository<CourseEntity>,
    private googleCloudStorageService: GoogleCloudStorageService,
  ) { }

  async create(dto: CreateOrUpdateCourseDto) {
    const { file, ...rest } = dto;
    const imageUrl = await this.googleCloudStorageService.uploadFile(
      file,
      'courses',
    );

    return this.repository.save({ ...rest, imageUrl });
  }


  findById(id: number) {
    return this.repository.createQueryBuilder('course')
      .leftJoinAndSelect('course.levels', 'level')
      .where('course.id = :id', { id })
      .getOne();
  }

  update(id: number, dto: CreateOrUpdateCourseDto) {
    return this.repository.update(id, dto);
  }

  delete(id: number) {
    return this.repository.delete({ id });
  }

  findPopularCourses() {
    return this.repository.find({
      where: {
        isPublic: true,
      },
      order: {
        id: 'ASC',
      },
      take: 3,
    });
  }

  findPublicCourses() {
    return this.repository.find({
      where: {
        isPublic: true,
      },
      order: {
        id: 'DESC',
      }
    });
  }

  findPrivateCourses() {
    return this.repository.find({
      where: {
        isPublic: false,
      },
      order: {
        id: 'DESC',
      }
    });
  }
}
