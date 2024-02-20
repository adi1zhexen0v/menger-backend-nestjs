import { ApiProperty } from "@nestjs/swagger";

export class CreateLevelDto {
  @ApiProperty({
    example: "Ағылшын тілінде сөйлем құрастыру: I/You/We/They"
  })
  name: string;

  @ApiProperty({
    example: 3
  })
  courseId: number;
}
