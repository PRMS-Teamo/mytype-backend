import { ApiProperty } from "@nestjs/swagger";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";

export class BumpReqDto {
  @ApiProperty({
    example: "38bf2516-7ee3-40f4-b390-7075e55baf8e",
    description: "사용자 고유 ID",
  })
  id: string;

  constructor(authenticatedUser: AuthenticatedUser) {
    this.id = authenticatedUser.id;
  }
}
