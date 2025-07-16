import { PickType } from "@nestjs/swagger";
import { User } from "../../entities/user.entity";

/**
 * 사용자 수정 응답 DTO - 수정된 사용자 정보 반환
 * 수정 후 최신 상태의 사용자 정보를 포함
 */
export class UpdateUserResDto extends PickType(User, [
  "id",
  "nickname",
  "github",
  "imgId",
  "profileImage",
  "location",
  "isPublic",
  "positionId",
  "description",
  "proceedType",
  "name",
  "userStacks",
  "updatedAt",
  "beginner",
] as const) {
  constructor(user: User) {
    super();
    Object.assign(this, user);
  }
}
