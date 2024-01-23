import { Module } from '@nestjs/common';
import { ConfigModule } from './common/config/config.module';
import { CoursesModule } from './resources/courses/courses.module';
import { DatabaseModule } from './common/database/database.module';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [
    ConfigModule,
    CoursesModule,
    DatabaseModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
