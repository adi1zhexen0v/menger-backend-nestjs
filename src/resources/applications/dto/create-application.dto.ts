import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateApplicationDto {
  @ApiProperty({
    description: 'The full name of the applicant',
    example: 'John Doe',
  })
  @IsNotEmpty({ message: 'Full name is required' })
  @IsString({ message: 'Full name must be a string' })
  fullName: string;

  @ApiProperty({
    description: 'Name of the organization',
    example: 'Acme Corp',
  })
  @IsNotEmpty({ message: 'Organization name is required' })
  @IsString({ message: 'Organization name must be a string' })
  organization: string;

  @ApiProperty({
    description: 'Email address of the applicant',
    example: 'john.doe@example.com',
  })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({
    description: 'Contact phone number of the applicant',
    example: '+1234567890',
  })
  @IsNotEmpty({ message: 'Phone number is required' })
  @IsPhoneNumber(null, { message: 'Invalid phone number' }) // 'null' allows any country format
  phoneNumber: string;

  @ApiProperty({
    description: 'Text of the application',
    example: 'Lorem ipsum...',
  })
  @IsNotEmpty({ message: 'Text is required' })
  text: string;

  isAccepted: boolean;
}
