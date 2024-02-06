import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/guards/admin.guard';

@Controller('applications')
@ApiTags('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  create(@Body() dto: CreateApplicationDto) {
    return this.applicationsService.create(dto);
  }

  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Get()
  findAll() {
    return this.applicationsService.findAll();
  }
}
