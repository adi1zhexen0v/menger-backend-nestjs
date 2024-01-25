import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsDate } from 'class-validator';

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
    description: 'Date of the application',
    example: '2024-01-25T09:00:00.000Z',
  })
  @IsNotEmpty({ message: 'Date is required' })
  @IsDate({ message: 'Invalid date format' })
  date: Date;
}
