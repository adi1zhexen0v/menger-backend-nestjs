import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ActivationCodeEntity } from "src/resources/activation-code/entities/activation-code.entity";
import { ApplicationEntity } from "src/resources/applications/entities/application.entity";
import { CourseEntity } from "src/resources/courses/entities/course.entity";
import { UserEntity } from "src/resources/users/entities/user.entity";

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
      entities: [CourseEntity, UserEntity, ApplicationEntity, ActivationCodeEntity],
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule]
})
export class DatabaseModule {}
