import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  UseGuards,
  Delete,
  Param,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/guards/admin.guard';
import { AcceptApplicationDto } from './dto/accept-application.dto';

@Controller('applications')
@ApiTags('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) { }

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

  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Patch()
  acceptApplication(@Body() dto: AcceptApplicationDto) {
    return this.applicationsService.acceptApplication(dto.id);
  }

  @ApiBearerAuth()
  @UseGuards(AdminGuard)
  @Delete(":id")
  deleteApplication(@Param('id') id: number) {
    return this.applicationsService.delete(id);
  }
}
