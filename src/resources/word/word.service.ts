import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WordEntity } from './entities/word.entity';
import { Repository } from 'typeorm';
import { CreateWordDto } from './dto/create-word.dto';
import { GoogleCloudStorageService } from 'src/services/gcs.service';

@Injectable()
export class WordService {
  constructor(
    @InjectRepository(WordEntity)
    private repository: Repository<WordEntity>,
    private googleCloudStorageService: GoogleCloudStorageService,
  ) { }

  async create(dto: CreateWordDto) {
    const { file, ...rest } = dto;
    const imageUrl = await this.googleCloudStorageService.uploadFile(
      file,
      'words',
    );

    return this.repository.save({ ...rest, imageUrl });
  }
}
