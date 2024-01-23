import { Module } from '@nestjs/common';
import { ConfigModule } from './common/config/config.module';
import { CoursesModule } from './resourses/courses/courses.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [
    ConfigModule,
    CoursesModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
