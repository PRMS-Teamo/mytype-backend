import { apply_status, apply_from } from "@/prisma/postgres/postgres-client";
import { ApiProperty } from "@nestjs/swagger";

export class UpsertApplyResponseDto {
  @ApiProperty({ description: "지원 상태" })
  apply_status: apply_status;

  @ApiProperty({ description: "지원 유형" })
  apply_from: apply_from;
}
