import { ApiProperty } from "@nestjs/swagger";

export class CreateApplicationDto {
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  organization: string;

  @ApiProperty()
  email: string;
  
  @ApiProperty()
  phoneNumber: string;
  
  @ApiProperty()
  date: Date;
}
