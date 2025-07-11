import { PickType } from "@nestjs/swagger";
import { User } from "../../entities/user.entity";

/**
 * 사용자 조회 응답 DTO - User 엔티티를 기반으로 생성
 * 단일 사용자 정보 조회 시 반환되는 모든 정보를 포함
 */
export class GetUserResDto extends PickType(User, [
  "id",
  "name",
  "role",
  "nickname",
  "email",
  "github",
  "profileImage",
  "location",
  "isJoined",
  "isPublic",
  "positionId",
  "userStacks",
  "description",
  "proceedType",
  "createdAt",
  "updatedAt",
] as const) {
  constructor(user: User) {
    super();
    Object.assign(this, user);
  }
}
