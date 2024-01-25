import { Controller, Get, Post, Body, Param, Patch, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateOrUpdateCourseDto } from './dto/create-update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('courses')
@ApiTags('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  create(@UploadedFile() file: Express.Multer.File, @Body() dto: CreateOrUpdateCourseDto) {
    dto.file = file;
    return this.coursesService.create(dto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id') 
  findById(@Param('id') id: number) {
    return this.coursesService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: CreateOrUpdateCourseDto) {
    return this.coursesService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coursesService.delete(id);
  }
}
