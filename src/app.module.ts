import { Module } from '@nestjs/common';
import { ConfigModule } from './common/config/config.module';
import { CoursesModule } from './resources/courses/courses.module';
import { DatabaseModule } from './common/database/database.module';
import { UsersModule } from './resources/users/users.module';
import { AuthModule } from './resources/auth/auth.module';
import { ApplicationsModule } from './resources/applications/applications.module';
import { ActivationCodeModule } from './resources/activation-code/activation-code.module';
import { FeedbackModule } from './resources/feedback/feedback.module';
import { OrganizationsModule } from './resources/organizations/organizations.module';
import { LevelModule } from './resources/level/level.module';
import { WordModule } from './resources/word/word.module';
import { ContentModule } from './resources/content/content.module';
import { TaskModule } from './resources/task/task.module';
import { UserCourseModule } from './resources/user-course/user-course.module';

@Module({
  imports: [
    ConfigModule,
    CoursesModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
    ApplicationsModule,
    ActivationCodeModule,
    FeedbackModule,
    OrganizationsModule,
    LevelModule,
    WordModule,
    ContentModule,
    TaskModule,
    UserCourseModule,
  ],
  controllers: [],
})
export class AppModule { }
