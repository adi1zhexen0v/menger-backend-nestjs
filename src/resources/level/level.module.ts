import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelEntity } from './entities/level.entity';
import { CourseEntity } from '../courses/entities/course.entity';

@Module({
  controllers: [LevelController],
  providers: [LevelService],
  imports: [
    TypeOrmModule.forFeature([LevelEntity, CourseEntity])
  ]
})
export class LevelModule {}
