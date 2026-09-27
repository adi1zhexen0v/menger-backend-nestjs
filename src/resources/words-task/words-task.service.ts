import { Injectable } from '@nestjs/common';
import { CreateWordsTaskDto } from './dto/create-words-task.dto';
import { UpdateWordsTaskDto } from './dto/update-words-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { WordsTask, WordsTasksDocument } from './schemas/words-task.schema';
import { Model } from 'mongoose';
import { LevelService } from '../level/level.service';

@Injectable()
export class WordsTaskService {
  constructor(
    @InjectModel(WordsTask.name)
    private readonly wordsTaskModel: Model<WordsTasksDocument>,
    private readonly levelService: LevelService
  ) { }


  async create(dto: CreateWordsTaskDto) {
    const newWordsTask = await new this.wordsTaskModel(dto).save();
    const level = await this.levelService.addWordsTaskToLevel({ levelId: dto.levelId, wordsTaskId: newWordsTask._id })
    return await this.wordsTaskModel.findByIdAndUpdate(newWordsTask._id, { courseId: level.courseId }, { new: true });
  }

  async findAll() {
    return await this.wordsTaskModel.find();
  }

  async findOne(id: string) {
    return await this.wordsTaskModel.findById(id);
  }

  async update(id: string, dto: UpdateWordsTaskDto) {
    return await this.wordsTaskModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async remove(id: string) {
    return await this.wordsTaskModel.findByIdAndDelete(id);
  }
}
