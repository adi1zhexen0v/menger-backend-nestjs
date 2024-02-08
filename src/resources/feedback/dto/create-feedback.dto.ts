import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateFeedbackDto {
  @ApiProperty({
    description: 'The full name of the user',
    example: 'John Doe',
  })
  @IsNotEmpty({ message: 'Full name must not be empty' })
  @IsString({ message: 'Full name must be a string' })
  fullName: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'john.doe@example.com',
  })
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email must not be empty' })
  email: string;

  @ApiProperty({
    description: 'The message from the user',
    example: 'I have an issue with your service.',
  })
  @IsNotEmpty({ message: 'Message must not be empty' })
  @IsString({ message: 'Message must be a string' })
  message: string;
}
