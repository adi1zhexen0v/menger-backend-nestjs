import { Controller, Post, Body, Param } from '@nestjs/common';
import { UserCourseService } from './user-course.service';

@Controller('user-course')
export class UserCourseController {
  constructor(private readonly userCourseService: UserCourseService) { }

  @Post(':userId/courses/:courseId')
  async addUserCourse(
    @Param('userId') userId: number,
    @Param('courseId') courseId: number
  ): Promise<any> {
    const result = await this.userCourseService.addUserCourse(userId, courseId);
    return result;
  }
}
