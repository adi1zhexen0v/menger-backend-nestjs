import { ApiProperty } from "@nestjs/swagger";

export class UpdatePointsDto {
  @ApiProperty({
    example: 1
  })
  id: number;

  @ApiProperty({
    example: 10
  })
  points: number;
}