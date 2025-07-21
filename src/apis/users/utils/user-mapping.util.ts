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
    github_id: user.github,
    img_url: user.profileImage,
    address: user.location,
    is_public: user.isPublic,
    position_id: user.positionId,
    description: user.description,
    proceed_type: user.proceedType,
    user_stacks: user.userStacks,
  };
}

/**
 * CreateUserReqDto -> 데이터베이스 형식 변환
 */
export function mapCreateDtoToDbFormat(dto: CreateUserReqDto) {
  return {
    nickname: dto.nickname,
    email: dto.email,
    github_id: dto.github,
    img_url: dto.profileImage,
    address: dto.location,
    is_public: dto.isPublic ?? false,
    position_id:
      dto.positionId && dto.positionId.trim() !== "" ? dto.positionId : null,
    description: dto.description,
    proceed_type: dto.proceedType ?? "ONLINE",
    name: dto.name,
    role: "USER",
    join_status: false,
    create_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
}

/**
 * UpdateUserReqDto -> 데이터베이스 형식 변환
 */
export function mapUpdateDtoToDbFormat(dto: UpdateUserReqDto) {
  console.log("🔍 mapUpdateDtoToDbFormat 입력:", dto);

  const mapped: Record<string, any> = {};

  if (dto.nickname !== undefined) {
    mapped.nickname = dto.nickname;
  }

  mapped.github_id = dto.github;

  if (dto.imgId !== undefined) {
    mapped.img_id = dto.imgId && dto.imgId.trim() !== "" ? dto.imgId : null;
  }
  if (dto.profileImage !== undefined) {
    mapped.img_url = dto.profileImage;
  }
  if (dto.location !== undefined) {
    mapped.address = dto.location;
  }
  if (dto.isPublic !== undefined) {
    mapped.is_public = dto.isPublic;
  }
  if (dto.positionId !== undefined) {
    mapped.position_id =
      dto.positionId && dto.positionId.trim() !== "" ? dto.positionId : null;
  }

  mapped.description = dto.description;

  if (dto.proceedType !== undefined) {
    mapped.proceed_type = dto.proceedType;
  }
  if (dto.name !== undefined) {
    mapped.name = dto.name;
  }

  mapped.updated_at = new Date().toISOString();

  const result = { ...mapped };

  if (typeof dto.userStacks[0] === "string") {
    result.user_stacks = dto.userStacks as string[];
  } else {
    result.user_stacks = dto.userStacks.map((stack) => {
      if (typeof stack === "string") {
        return stack;
      }
      return stack.stackId;
    });
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
 * 속성 이름 매핑 상수
 */
export const USER_FIELD_MAPPING = {
  toDb: {
    github: "github_id",
    profileImage: "img_url",
    location: "address",
    isPublic: "is_public",
    isJoined: "join_status",
    positionId: "position_id",
    userStacks: "user_stacks",
  },
  toEntity: {
    github_id: "github",
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
