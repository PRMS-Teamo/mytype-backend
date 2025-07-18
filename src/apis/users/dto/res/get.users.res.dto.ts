import { ApiProperty, PickType } from "@nestjs/swagger";
import { User } from "../../entities/user.entity";

/**
 * 사용자 목록 조회 응답 DTO - 공개 정보만 포함
 * 사용자 목록 조회 시 최소한의 필요 정보만 반환
 */
export class GetUsersResDto extends PickType(User, [
  "id",
  "nickname",
  "github",
  "imgId",
  "profileImage",
  "location",
  "description",
  "proceedType",
  "positionId",
  "positionName",
  "role",
  "name",
  "beginner",
  "userStacks",
] as const) {
  constructor(user: User) {
    super();
    Object.assign(this, user);
  }
}

/**
 * 사용자 목록 응답 래퍼 DTO
 */
export class GetUsersResponseDto {
  @ApiProperty({
    type: [GetUsersResDto],
    description: "사용자 목록",
  })
  users: GetUsersResDto[];

  constructor(users: GetUsersResDto[]) {
    this.users = users;
  }
}
