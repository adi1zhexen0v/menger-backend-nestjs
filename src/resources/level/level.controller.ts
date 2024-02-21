import { Controller, Post, Body, Patch, Param, Get } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('level')
@ApiTags('levels')
export class LevelController {
  constructor(private readonly levelService: LevelService) { }

  @Post()
  create(@Body() dto: CreateLevelDto) {
    return this.levelService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateLevelDto) {
    return this.levelService.update(+id, dto);
  }

  @Get(':id')
  getLevelDetails(@Param('id') id: string) {
    return this.levelService.getLevelDetails(+id);
  }
}
