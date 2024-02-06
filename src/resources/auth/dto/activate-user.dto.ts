import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class ActivateUserDto {
  @ApiProperty({
    description: 'Activation code for the user account',
    example: '123456',
  })
  @IsNotEmpty({ message: 'Activation code is required' })
  @IsString({ message: 'Activation code must be a string' })
  @Length(6, 6, { message: 'Activation code must be exactly 6 characters' })
  activationCode: string;
}
