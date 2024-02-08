import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { StudentGuard } from 'src/guards/student.guard';
import { JwtToken } from 'src/common/decorators/jwt-token.decorator';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @Get()
  getMe(@JwtToken() token: string) {
    return this.usersService.getMe(token);
  }

  @ApiBearerAuth()
  @UseGuards(StudentGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }

  @ApiBearerAuth()
  @UseGuards(StudentGuard)
  @Get(':id')
  findById(@Param('id') id: number) {
    return this.usersService.findById(id);
  }

  @ApiBearerAuth()
  @UseGuards(StudentGuard)
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}
