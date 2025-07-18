import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { AuthenticatedUser } from "@/apis/auth/types/authenticated-user.interface";
import { CreateUserReqDto } from "./dto/req/create-user.req.dto";
import { UpdateUserReqDto } from "./dto/req/update-user.req.dto";
import {
  mapCreateDtoToDbFormat,
  mapUpdateDtoToDbFormat,
  mapStackIdsToUserStacks,
} from "./utils/user-mapping.util";
import { GetUserResDto } from "./dto/res/get.user.res.dto";
import {
  FileUploadInfo,
  S3Service,
} from "@/infrastructure/storage/files/s3/s3.service";
import { ContentType } from "../shared/types/content.type";
import { ImagesService } from "../images/images.service";

@Injectable()
export class UsersService {
  constructor(
    private postgresService: PostgresService,
    private s3Service: S3Service,
    private imagesService: ImagesService,
  ) {}
  async defaultProfileImage() {
    const defaultProfileImage = await this.imagesService.findDefaultImage();
    return defaultProfileImage;
  }
  /**
   * 외부 ID로 사용자 조회 (소셜 로그인용)
   */
  async findUserByExternalId(externalId: string) {
    const user = await this.postgresService.user_auths.findFirst({
      where: {
        external_id: externalId,
      },
      include: {
        users: true,
      },
    });

    if (!user) {
      throw new NotFoundException("User not found with external ID");
    }
    return user;
  }

  /**
   * 사용자 ID로 사용자 조회 (완전한 정보 포함)
   */
  async findUserByUserId(userId: string): Promise<GetUserResDto> {
    const user = await this.postgresService.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        position_id: true,
        nickname: true,
        github_id: true,
        img_id: true,
        img_url: true,
        address: true,
        join_status: true,
        is_public: true,
        description: true,
        proceed_type: true,
        beginner: true,
        user_stacks: {
          select: {
            stacks: {
              select: {
                id: true,
                name: true,
                img_url: true,
              },
            },
          },
        },
        create_at: true,
        updated_at: true,
        role: true,
        name: true,
      },
    });
    console.log("🔍 user:", JSON.stringify(user, null, 2));
    if (!user) {
      throw new NotFoundException("User not found");
    }

    let positionName: string | undefined;
    if (user.position_id) {
      const position = await this.postgresService.positions.findUnique({
        where: {
          id: user.position_id,
        },
        select: {
          name: true,
        },
      });
      positionName = position?.name ?? undefined;
    }
    // Prisma 결과를 AuthenticatedUser 형태로 변환
    const getUserResDto: GetUserResDto = {
      id: user.id,
      positionId: user.position_id ?? undefined,
      positionName: positionName ?? undefined,
      nickname: user.nickname ?? undefined,
      github: user.github_id ?? undefined,
      imgId: user.img_id ?? undefined,
      profileImage: user.img_url ?? null,
      location: user.address ?? undefined,
      isJoined: user.join_status ?? undefined,
      isPublic: user.is_public ?? undefined,
      description: user.description ?? undefined,
      proceedType: user.proceed_type ?? undefined,
      role: user.role ?? undefined,
      name: user.name ?? undefined,
      beginner: user.beginner ?? false,
      userStacks:
        user.user_stacks?.map((stack) => ({
          stackId: stack.stacks.id,
          stackName: stack.stacks.name ?? "",
          stackImg: stack.stacks.img_url ?? "",
        })) ?? [],
      createdAt: user.create_at?.toISOString(),
      updatedAt: user.updated_at?.toISOString(),
    };
    console.log("🔍 getUserResDto:", getUserResDto.positionName);
    if (!getUserResDto.imgId) {
      getUserResDto.profileImage = await this.defaultProfileImage();
    } else {
      getUserResDto.profileImage = await this.imagesService.findImageByImageId(
        getUserResDto.imgId,
      );
    }
    return getUserResDto;
  }

  /**
   * 공개 사용자 목록 조회 (페이지네이션)
   */
  async findUsers(start: number, end: number): Promise<AuthenticatedUser[]> {
    const pageSize = end - start;
    const users = await this.postgresService.users.findMany({
      where: {
        is_public: true,
      },
      skip: start,
      take: pageSize,
      select: {
        id: true,
        position_id: true,
        nickname: true,
        github_id: true,
        img_id: true,
        img_url: true,
        address: true,
        join_status: true,
        is_public: true,
        description: true,
        proceed_type: true,
        role: true,
        name: true,
        user_stacks: {
          select: {
            stacks: {
              select: {
                id: true,
                name: true,
                img_url: true,
              },
            },
          },
        },
        beginner: true,
        create_at: true,
        updated_at: true,
      },
      orderBy: [{ bumped_at: "desc" }],
    });

    const realUrls = await Promise.all(
      users.map((user) =>
        this.imagesService.findImageByImageId(user.img_id ?? ""),
      ),
    );
    const usersWithRealUrls = users.map((user, index) => ({
      ...user,
      img_url: realUrls[index] ?? user.img_url,
    }));

    return usersWithRealUrls.map((user) => ({
      id: user.id,
      positionId: user.position_id,
      nickname: user.nickname ?? undefined,
      github: user.github_id ?? undefined,
      imgId: user.img_id ?? undefined,
      profileImage: user.img_url ?? undefined,
      location: user.address ?? undefined,
      isJoined: user.join_status ?? undefined,
      isPublic: user.is_public ?? undefined,
      description: user.description ?? undefined,
      proceedType: user.proceed_type ?? undefined,
      role: user.role ?? undefined,
      name: user.name ?? undefined,
      beginner: user.beginner ?? undefined,
      userStacks:
        user.user_stacks?.map((stack) => ({
          stackId: stack.stacks.id,
          stackName: stack.stacks.name ?? "",
          stackImg: stack.stacks.img_url ?? "",
        })) ?? [],
      createdAt: user.create_at?.toISOString(),
      updatedAt: user.updated_at?.toISOString(),
    }));
  }

  /**
   * 새 사용자 생성
   */
  async createUser(
    createUserDto: CreateUserReqDto,
  ): Promise<AuthenticatedUser> {
    const userData = mapCreateDtoToDbFormat(createUserDto);
    const { userStacks, ...userDataWithoutStacks } = userData as any;

    const newUser = await this.postgresService.$transaction(async (tx) => {
      // 사용자 생성
      const user = await tx.users.create({
        data: userDataWithoutStacks,
      });

      // 스택 연결 (있는 경우)
      if (userStacks && userStacks.length > 0) {
        await tx.user_stacks.createMany({
          data: mapStackIdsToUserStacks(userStacks, user.id),
        });
      }

      return user;
    });

    // 생성된 사용자 정보 조회하여 반환
    const createdUser = await this.findUserByUserId(newUser.id);
    const realUrl = await this.imagesService.findImageByImageId(
      createdUser.imgId ?? "",
    );
    return {
      ...createdUser,
      profileImage: realUrl ?? createdUser.profileImage,
    };
  }

  async generatePresignedUrl(
    userId: string,
    fileName: string,
  ): Promise<FileUploadInfo> {
    const fileExtension = fileName.split(".").pop();
    const folder = "images/users";
    return this.s3Service.generatePresignedUrl(
      userId,
      fileName,
      fileExtension as ContentType,
      folder,
    );
  }

  /**
   * 사용자 정보 수정
   */
  async updateUserInfoByUserId(
    userId: string,
    userInfo: UpdateUserReqDto,
  ): Promise<GetUserResDto> {
    const { user_stacks, ...mappedData } = mapUpdateDtoToDbFormat(userInfo);
    console.log("🔍 user_stacks:", user_stacks);
    await this.postgresService.$transaction(async (tx) => {
      console.log("로직 진입!!!!!!!!!!!!!!");
      if (user_stacks && user_stacks.length > 0) {
        console.log("🔍 user_stacks:", user_stacks);
        console.log("====================userInfo:", userInfo);
        const newStackIds: string[] = user_stacks as string[];

        console.log("🔍 newStackIds:", newStackIds);
        const searchedStackIds = await tx.user_stacks.findMany({
          where: {
            user_id: userId,
          },
          select: {
            stack_id: true,
          },
        });
        console.log("🔍 searchedStackIds:", searchedStackIds);
        if (!searchedStackIds || searchedStackIds.length === 0) {
          await tx.user_stacks.createMany({
            data: mapStackIdsToUserStacks(newStackIds, userId),
          });
          return;
        } else {
          const prevStackIds = searchedStackIds.map((stack) => stack.stack_id);

          const stackIdsToDelete = prevStackIds.filter(
            (id) => !newStackIds.includes(id),
          );
          if (stackIdsToDelete.length > 0) {
            await tx.user_stacks.deleteMany({
              where: {
                user_id: userId,
                stack_id: { in: stackIdsToDelete },
              },
            });
          }

          const stackIdsToAdd = newStackIds.filter(
            (id) => !prevStackIds.includes(id),
          );
          console.log("🔍 stackIdsToAdd:", stackIdsToAdd);
          if (stackIdsToAdd.length > 0) {
            await tx.user_stacks.createMany({
              data: mapStackIdsToUserStacks(stackIdsToAdd, userId),
            });
          }
        }
      } else {
        console.log("🔍 user_stacks:", user_stacks);
        console.log("🔍 mappedData:", mappedData);
        console.log("====================userInfo:", userInfo);
        await tx.user_stacks.deleteMany({
          where: {
            user_id: userId,
          },
        });
      }
      const userStacks = await tx.user_stacks.findMany({
        where: {
          user_id: userId,
        },
        select: {
          stacks: {
            select: {
              id: true,
              name: true,
              img_url: true,
            },
          },
        },
      });
      console.log("🔍 userStacks:", userStacks);
      console.log("🔍 mappedData:", mappedData);
      // 사용자 정보 업데이트 (스택 제외)
      if (Object.keys(mappedData).length > 0) {
        await tx.users.update({
          where: {
            id: userId,
          },
          data: mappedData,
        });
      }
    });

    return this.findUserByUserId(userId);
  }

  /**
   * 사용자 가입 상태 조회
   */
  async getJoinStatusByUuid(uuid: string): Promise<boolean> {
    const user = await this.postgresService.users.findFirst({
      where: {
        id: uuid,
      },
      select: {
        join_status: true,
      },
    });

    if (!user) {
      throw new InternalServerErrorException(
        "User not found for join status check",
      );
    }

    return Boolean(user.join_status);
  }

  /**
   * 사용자 가입 상태 업데이트
   */
  async updateJoinStatusByUuid(
    uuid: string,
    status: boolean,
    tx?: PostgresService,
  ): Promise<boolean> {
    const client = tx ?? this.postgresService;

    const isPublic = status ? false : true;

    const updateResult = await client.users.update({
      where: {
        id: uuid,
      },
      data: {
        join_status: status,
        is_public: isPublic,
        updated_at: new Date(),
      },
    });

    if (!updateResult) {
      throw new InternalServerErrorException("Failed to update join status");
    }

    return true;
  }

  /**
   * 사용자 정보 완성도 확인
   */
  async checkNullInfo(uuid: string): Promise<boolean> {
    const userInfo = await this.findUserByUserId(uuid);
    console.log("🔍 userInfo:", userInfo);
    console.log(
      `부족한 정보: 
      \n 닉네임: ${userInfo.nickname}, 
      \n 깃허브: ${userInfo.github}, 
      \n 위치: ${userInfo.location}, 
      \n 포지션: ${userInfo.positionId}, 
      \n 자기소개: ${userInfo.description}`,
    );

    // 스택도 하나 이상 있어야 함
    const hasStacks = Boolean(userInfo.userStacks?.length);

    return hasStacks;
  }

  /**
   * 팀 소유자 여부 확인
   */
  async checkOwner(uuid: string): Promise<boolean> {
    const team = await this.postgresService.teams.findFirst({
      where: {
        user_id: uuid,
      },
    });

    return !!team;
  }

  async getTeamMembers(userId: string) {
    const teamMembers = await this.postgresService.team_users.findFirst({
      where: { user_id: userId },
      select: {
        team_positions: {
          select: {
            teams: {
              select: {
                team_positions: {
                  select: {
                    positions: {
                      select: {
                        name: true,
                      },
                    },
                    team_users: {
                      select: {
                        is_owner: true,
                        users: {
                          select: {
                            id: true,
                            name: true,
                            img_id: true,
                            img_url: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!teamMembers) return [];

    return teamMembers;
  }
}
