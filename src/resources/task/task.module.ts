import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { LevelEntity } from '../level/entities/level.entity';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [
    TypeOrmModule.forFeature([TaskEntity, LevelEntity])
  ]
})
export class TaskModule { }
