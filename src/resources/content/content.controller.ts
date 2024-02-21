import { Controller, Post, Body } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('content')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) { }

  @Post()
  create(@Body() dto: CreateContentDto) {
    return this.contentService.create(dto);
  }
}
