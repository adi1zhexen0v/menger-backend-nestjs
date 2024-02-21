import { Module } from '@nestjs/common';
import { WordService } from './word.service';
import { WordController } from './word.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordEntity } from './entities/word.entity';
import { LevelEntity } from '../level/entities/level.entity';
import { GoogleCloudStorageService } from 'src/services/gcs.service';

@Module({
  controllers: [WordController],
  providers: [WordService, GoogleCloudStorageService],
  imports: [
    TypeOrmModule.forFeature([WordEntity, LevelEntity])
  ]
})
export class WordModule { }
