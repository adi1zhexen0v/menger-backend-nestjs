import { Body, Controller, Post, UploadedFile, UseInterceptors, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { WordService } from './word.service';
import { CreateWordDto } from './dto/create-word.dto';

@ApiTags('words')
@Controller('word')
export class WordController {
  constructor(private readonly wordService: WordService) { }

  @Post(":id")
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  create(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateWordDto,
  ) {
    dto.file = file;
    dto.levelId = id;
    return this.wordService.create(dto);
  }
}
