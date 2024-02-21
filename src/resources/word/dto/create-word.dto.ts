import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateWordDto {
  @ApiProperty({
    example: 'Алма',
  })
  kaz: string;

  @ApiProperty({
    example: 'Apple',
  })
  eng: string;

  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: false,
    description: 'Word image file',
  })
  file: Express.Multer.File;

  @ApiProperty({
    example: 1
  })
  levelId: number;
}
