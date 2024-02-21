import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
  @ApiProperty({
    example: "Мен ағылшынша сөйлеймін"
  })
  kaz: string;

  @ApiProperty({
    example: "I speak English"
  })
  eng: string;

  @ApiProperty({
    example: "You;tell;on"
  })
  uncorrectWords: string;

  @ApiProperty({
    example: 1
  })
  levelId: number;
}
