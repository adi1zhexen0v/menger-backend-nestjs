import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateOrUpdateCourseDto } from './dto/create-update-course.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AdminGuard } from 'src/guards/admin.guard';
import { ensureBoolean } from 'src/utils/utils';

@Controller('courses')
@ApiTags('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateOrUpdateCourseDto,
  ) {
    dto.file = file;
    dto.isPublic = ensureBoolean(dto.isPublic);
    return this.coursesService.create(dto);
  }

  @Get('/popular')
  findPopularCourses() {
    return this.coursesService.findPopularCourses();
  }

  @Get('/public')
  findPublicCourses() {
    return this.coursesService.findPublicCourses();
  }

  @Get('/private')
  findPrivateCourses() {
    return this.coursesService.findPrivateCourses();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.coursesService.findById(+id);
  }

  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: CreateOrUpdateCourseDto) {
    return this.coursesService.update(id, dto);
  }

  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coursesService.delete(id);
  }
}
