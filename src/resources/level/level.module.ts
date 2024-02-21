import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelEntity } from './entities/level.entity';
import { CourseEntity } from '../courses/entities/course.entity';
import { WordEntity } from '../word/entities/word.entity';
import { ContentEntity } from '../content/entities/content.entity';
import { TaskEntity } from '../task/entities/task.entity';

@Module({
  controllers: [LevelController],
  providers: [LevelService],
  imports: [
    TypeOrmModule.forFeature([LevelEntity, CourseEntity, WordEntity, ContentEntity, TaskEntity])
  ]
})
export class LevelModule { }
