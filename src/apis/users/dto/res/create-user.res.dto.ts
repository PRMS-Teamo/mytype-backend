import { ApiProperty, PickType } from "@nestjs/swagger";
import { User } from "../../entities/user.entity";

/**
 * 사용자 생성 응답 DTO - 생성된 사용자 정보 반환
 * 민감한 정보는 제외하고 기본적인 정보만 포함
 */
export class CreateUserResDto extends PickType(User, [
  "id",
  "nickname",
  "email",
  "github",
  "profileImage",
  "location",
  "isPublic",
  "positionId",
  "description",
  "proceedType",
  "name",
  "userStacks",
  "createdAt",
] as const) {
  constructor(user: User) {
    super();
    Object.assign(this, user);
  }

  @ApiProperty({
    example: "사용자가 성공적으로 생성되었습니다.",
    description: "생성 결과 메시지",
  })
  message: string = "사용자가 성공적으로 생성되었습니다.";
}
