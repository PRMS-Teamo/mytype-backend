import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";
import { User } from "../entities/user.entity";
import { CreateUserReqDto } from "../dto/req/create-user.req.dto";
import { UpdateUserReqDto } from "../dto/req/update-user.req.dto";
import { GetUserResDto } from "../dto/res/get.user.res.dto";

/**
 * AuthenticatedUser -> User 엔티티 변환
 * 데이터베이스에서 가져온 AuthenticatedUser를 클라이언트 친화적인 User 엔티티로 변환
 */
export function mapToUserEntity(authenticatedUser: AuthenticatedUser): User {
  return new User(authenticatedUser);
}

/**
 * User 엔티티 -> 데이터베이스 형식 변환
 * 클라이언트에서 받은 User 데이터를 데이터베이스 저장 형식으로 변환
 */
export function mapUserToDbFormat(user: Partial<User>) {
  return {
    nickname: user.nickname,
    email: user.email,
    github_id: user.github, // github -> github_id
    img_url: user.profileImage, // profileImage -> img_url
    address: user.location, // location -> address
    is_public: user.isPublic, // isPublic -> is_public
    position_id: user.positionId, // positionId -> position_id
    description: user.description, // description -> description
    proceed_type: user.proceedType, // proceedType -> proceed_type
    user_stacks: user.userStacks, // userStacks -> user_stacks
  };
}

/**
 * CreateUserReqDto -> 데이터베이스 형식 변환
 */
export function mapCreateDtoToDbFormat(dto: CreateUserReqDto) {
  return {
    nickname: dto.nickname,
    email: dto.email,
    github_id: dto.github, // github -> github_id
    img_url: dto.profileImage, // profileImage -> img_url
    address: dto.location, // location -> address
    is_public: dto.isPublic ?? false, // isPublic -> is_public
    position_id:
      dto.positionId && dto.positionId.trim() !== "" ? dto.positionId : null, // positionId -> position_id (빈 문자열은 null로)
    description: dto.description, // description -> description
    proceed_type: dto.proceedType ?? "ONLINE", // proceedType -> proceed_type
    name: dto.name,
    role: "USER", // 기본 역할
    join_status: false, // 새 사용자는 기본적으로 미가입 상태
    create_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

/**
 * UpdateUserReqDto -> 데이터베이스 형식 변환
 */
export function mapUpdateDtoToDbFormat(dto: UpdateUserReqDto) {
  const mapped: Record<string, any> = {};

  if (dto.nickname !== undefined) {
    mapped.nickname = dto.nickname;
  }
  if (dto.github !== undefined) {
    mapped.github_id = dto.github; // github -> github_id
  }
  if (dto.imgId !== undefined) {
    mapped.img_id = dto.imgId && dto.imgId.trim() !== "" ? dto.imgId : null; // imgId -> img_id
  }
  if (dto.profileImage !== undefined) {
    mapped.img_url = dto.profileImage; // profileImage -> img_url
  }
  if (dto.location !== undefined) {
    mapped.address = dto.location; // location -> address
  }
  if (dto.isPublic !== undefined) {
    mapped.is_public = dto.isPublic; // isPublic -> is_public
  }
  if (dto.positionId !== undefined) {
    mapped.position_id =
      dto.positionId && dto.positionId.trim() !== "" ? dto.positionId : null;
  }
  if (dto.description !== undefined) {
    mapped.description = dto.description; // description -> description
  }
  if (dto.proceedType !== undefined) {
    mapped.proceed_type = dto.proceedType; // proceedType -> proceed_type
  }
  if (dto.name !== undefined) {
    mapped.name = dto.name;
  }

  // 항상 업데이트 시간 갱신
  mapped.updated_at = new Date().toISOString();

  // userStacks는 별도 처리를 위해 반환 객체에 포함
  const result = { ...mapped };
  if (dto.userStacks && dto.userStacks.length > 0) {
    if (typeof dto.userStacks[0] === "string") {
      result.user_stacks = dto.userStacks as string[];
    } else {
      result.user_stacks = dto.userStacks.map(
        (stack: { stackId: string; stackName: string; stackImg: string }) =>
          stack.stackId,
      );
    }
  }

  return result;
}

/**
 * 스택 ID 배열 -> user_stacks 형식 변환
 */
export function mapStackIdsToUserStacks(stackIds: string[], userId: string) {
  return stackIds.map((stackId) => ({
    user_id: userId,
    stack_id: stackId,
  }));
}

/**
 * user_stacks -> 스택 ID 배열 변환
 */
export function mapUserStacksToStackIds(
  userStacks: Array<{ stack_id: string }>,
) {
  return userStacks.map((stack) => stack.stack_id);
}

/**
 * 속성 이름 매핑 상수 - User 엔티티 기준
 */
export const USER_FIELD_MAPPING = {
  // User 엔티티 -> DB 매핑
  toDb: {
    github: "github_id", // github -> github_id
    profileImage: "img_url",
    location: "address",
    isPublic: "is_public",
    isJoined: "join_status",
    positionId: "position_id",
    userStacks: "user_stacks",
  },
  // DB -> User 엔티티 매핑
  toEntity: {
    github_id: "github", // github_id -> github
    img_url: "profileImage",
    address: "location",
    is_public: "isPublic",
    join_status: "isJoined",
    position_id: "positionId",
    user_stacks: "userStacks",
  },
} as const;

export function mapDbFormatToGetDto(user: GetUserResDto) {
  return user;
}
