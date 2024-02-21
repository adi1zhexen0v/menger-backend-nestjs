import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentEntity } from './entities/content.entity';
import { LevelEntity } from '../level/entities/level.entity';

@Module({
  controllers: [ContentController],
  providers: [ContentService],
  imports: [TypeOrmModule.forFeature([ContentEntity, LevelEntity])]
})
export class ContentModule { }
