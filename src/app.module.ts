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
  ],
  controllers: [],
})
export class AppModule { }
