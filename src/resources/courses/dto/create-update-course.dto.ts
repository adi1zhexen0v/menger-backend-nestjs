import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class 
CreateOrUpdateCourseDto {
  @ApiProperty({
    description: 'The title of the course',
    example: 'Introduction to NestJS',
  })
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  @Length(3, 100, {
    message: 'Title must be between 3 and 100 characters long',
  })
  title: string;

  @ApiProperty({
    description: 'Detailed description of the course',
    example: 'This course provides an in-depth introduction to NestJS ...',
  })
  @IsNotEmpty({ message: 'Description is required' })
  @IsString({ message: 'Description must be a string' })
  @Length(10, 500, {
    message: 'Description must be between 10 and 500 characters long',
  })
  description: string;

  @ApiProperty({
    description: 'Price of the course in KZT',
    example: 990,
    minimum: 1,
  })
  @IsNumber({}, { message: 'Price must be a number' })
  @Min(1, { message: 'Price must be at least 1' })
  price: number;

  @ApiProperty({
    description: 'Flag indicating if the course is public',
    example: true,
  })
  @IsBoolean({ message: 'isPublic must be a boolean' })
  isPublic: boolean;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
    description: 'Course image file',
  })
  file: Express.Multer.File;

  @ApiProperty({
    description: 'Benefits of taking the course',
    example: 'Understanding of advanced NestJS concepts',
  })
  @IsString({ message: 'Benefits must be a string' })
  benefits: string;

  organizationId?: number;
}
