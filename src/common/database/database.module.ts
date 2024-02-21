import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivationCodeEntity } from 'src/resources/activation-code/entities/activation-code.entity';
import { ApplicationEntity } from 'src/resources/applications/entities/application.entity';
import { ContentEntity } from 'src/resources/content/entities/content.entity';
import { CourseEntity } from 'src/resources/courses/entities/course.entity';
import { FeedbackEntity } from 'src/resources/feedback/entities/feedback.entity';
import { LevelEntity } from 'src/resources/level/entities/level.entity';
import { OrganizationEntity } from 'src/resources/organizations/entities/organization.entity';
import { TaskEntity } from 'src/resources/task/entities/task.entity';
import { UserCourseEntity } from 'src/resources/user-course/entities/user-course.entity';
import { UserEntity } from 'src/resources/users/entities/user.entity';
import { WordEntity } from 'src/resources/word/entities/word.entity';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: +DB_PORT,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [
        CourseEntity,
        UserEntity,
        ApplicationEntity,
        ActivationCodeEntity,
        FeedbackEntity,
        OrganizationEntity,
        LevelEntity,
        WordEntity,
        ContentEntity,
        TaskEntity,
        UserCourseEntity
      ],
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule { }
