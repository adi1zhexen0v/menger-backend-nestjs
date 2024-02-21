import { ApiProperty } from "@nestjs/swagger";

export class CreateContentDto {
  @ApiProperty({
    example: "<h2>Text</h2>"
  })
  content: string;

  @ApiProperty({
    example: 1
  })
  levelId: number;
}
