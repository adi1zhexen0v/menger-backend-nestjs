import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { GoogleCloudStorageService } from 'src/services/gsc.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, GoogleCloudStorageService],
  imports: [TypeOrmModule.forFeature([CourseEntity])]
})
export class CoursesModule {}
