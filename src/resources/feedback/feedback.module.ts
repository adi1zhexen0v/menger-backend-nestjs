import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { FeedbackEntity } from './entities/feedback.entity';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService],
  imports: [
    TypeOrmModule.forFeature([FeedbackEntity])
  ]
})
export class FeedbackModule { }
