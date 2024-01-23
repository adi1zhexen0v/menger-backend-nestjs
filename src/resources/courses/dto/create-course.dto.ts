import { ApiProperty } from "@nestjs/swagger";

export class CreateCourseDto {
  @ApiProperty()
  title: string;
  
  @ApiProperty()
  description: string;
  
  @ApiProperty({
    minimum: 1
  })
  price: number;
  
  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  isPublic: boolean;
}
