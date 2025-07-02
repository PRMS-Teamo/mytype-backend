import { ApiProperty } from "@nestjs/swagger";

export class GetMyInfoDto {
  @ApiProperty({ example: "38bf2516-7ee3-40f4-b390-7075e55baf8e" })
  id: string;

  @ApiProperty({
    example: null,
    description: "포지션 관련 로직 추가하면 진행 예정",
  })
  position_id: string | null;

  @ApiProperty({ example: "USER" })
  role: "USER" | "ADMIN";

  @ApiProperty({ example: "한지웅" })
  name: string;

  @ApiProperty({ example: "니크네이므" })
  nickname: string;

  @ApiProperty({ example: null, description: "암호화시 활용 예정(확장 가능성)" })
  salt: string | null;

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

  @ApiProperty({ example: "ONLINE" })
  preferred_meeting: "ONLINE" | "OFFLINE" | "BOTH";
}

export class PutMyInfoDto {
  @ApiProperty({ example: "scorchedrice" })
  github_url: string;

  @ApiProperty({ example: "월마리아" })
  address: string;

  @ApiProperty({ example: 3 })
  img: number;

  @ApiProperty({ example: "니크네이므" })
  nickname: string;

  @ApiProperty({ example: "ONLINE" })
  preferred_meeting: "ONLINE" | "BOTH" | "OFFLINE";
}
