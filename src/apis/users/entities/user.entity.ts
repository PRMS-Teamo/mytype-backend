import { ApiProperty } from "@nestjs/swagger";

export class User {
  @ApiProperty({ description: "사용자 ID" })
  id: string;

  @ApiProperty({ description: "사용자 이름", required: false })
  username?: string;

  @ApiProperty({ description: "사용자 이메일", required: false })
  email?: string;

  @ApiProperty({ description: "표시 이름", required: false })
  displayName?: string;

  @ApiProperty({ description: "생성일", required: false })
  createdAt?: Date;

  @ApiProperty({ description: "수정일", required: false })
  updatedAt?: Date;
}
