import { ApiProperty } from "@nestjs/swagger";

export class GetMyInfoDto {
  @ApiProperty({ example: "123455-123421-12341-..." })
  id: string;

  @ApiProperty({ example: "USER" })
  role: "USER" | "ADMIN";

  @ApiProperty({ example: "한지웅" })
  name: string;

  @ApiProperty({ example: "김희영" })
  nickname: string;

  @ApiProperty({ example: null, description: "수정 예정" })
  password: string | null;

  @ApiProperty({ example: "scorchedrice" })
  github_url: string | null;

  @ApiProperty({ example: 1, description: "숫자 데이터로 변경 예정" })
  img: number | null;

  @ApiProperty({ example: "마레" })
  address: string | null;

  @ApiProperty({ example: null, description: "합류 여부, 수정 예정" })
  join_status: null | boolean;

  @ApiProperty({ example: "2025-06-27T05:21:20.218Z" })
  created_at: Date;

  @ApiProperty({
    example: "2025-06-27T05:21:20.218Z",
    description: "수정될 수 있음.",
  })
  updated_at: Date;

  @ApiProperty({ example: null })
  Field: null | string;
}

export class PutMyInfoDto {
  @ApiProperty({ example: "scorchedrice", required: false })
  github_url: string;

  @ApiProperty({ example: "월마리아", required: false })
  address: string;

  @ApiProperty({ example: 3, required: false })
  img: number;

  @ApiProperty({ example: "니크네이므", required: false })
  nickname: string;
}
