import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { GoogleCloudStorageService } from 'src/services/gcs.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/common/jwt/jwt.config';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, GoogleCloudStorageService],
  imports: [TypeOrmModule.forFeature([CourseEntity]), JwtModule.register(jwtConfig)]
})
export class CoursesModule {}
