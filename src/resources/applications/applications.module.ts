import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationEntity } from './entities/application.entity';

@Module({
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
  imports: [TypeOrmModule.forFeature([ApplicationEntity])]
})
export class ApplicationsModule {}