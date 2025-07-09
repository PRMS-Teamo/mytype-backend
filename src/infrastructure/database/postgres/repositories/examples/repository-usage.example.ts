/**
 * 공통 쿼리 타입 사용 예시
 *
 * 이 파일은 src/common/types의 타입들을 실제로 어떻게 사용하는지 보여주는 예시입니다.
 */

import { Injectable } from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import { BasePostgresRepository } from "@/infrastructure/database/postgres/repositories/base.postgres.repository";

// 타입 정의 (실제 사용시에는 별도 파일로 분리)
interface BaseQueryOptions {
  skip?: number;
  take?: number;
  orderBy?: any;
  select?: Record<string, boolean>;
  include?: Record<string, boolean>;
}

interface SearchQueryOptions extends BaseQueryOptions {
  search?: string;
  searchFields?: string[];
}

// interface FilterQueryOptions extends BaseQueryOptions {
//   filters?: Record<string, any>;
// }

interface ComplexQueryOptions extends BaseQueryOptions {
  id?: string;
  ids?: string[];
  search?: string;
  searchFields?: string[];
  filters?: Record<string, any>;
  dateRange?: {
    startDate?: Date;
    endDate?: Date;
    field?: string;
  };
}

@Injectable()
export class ExampleUsersRepository extends BasePostgresRepository<any> {
  constructor(protected readonly prisma: PostgresService) {
    super(prisma, "users");
  }

  /**
   * 예시 1: 기본 조회
   */
  async getUsers(options?: BaseQueryOptions) {
    return this.findAll(options);
  }

  /**
   * 예시 2: 검색 기능
   */
  async searchUsers(options: SearchQueryOptions) {
    const searchFields = options.searchFields || ["name", "nickname"];
    return this.search({
      ...options,
      searchFields,
    });
  }

  /**
   * 예시 3: 필터링
   */
  async getUsersByRole(role: string, options?: BaseQueryOptions) {
    return this.findByFilters({
      filters: { role },
      ...options,
    });
  }

  /**
   * 예시 4: 복합 쿼리
   */
  async getUsersByComplexQuery(options: ComplexQueryOptions) {
    return this.findByComplexQuery(options);
  }

  /**
   * 예시 5: 커스텀 Where 조건
   */
  async getActiveUsersInLocation(location: string) {
    return this.findByWhere({
      join_status: true,
      address: { contains: location },
    });
  }
}

/**
 * 서비스 레이어에서의 사용 예시
 */
@Injectable()
export class ExampleUsersService {
  constructor(private readonly usersRepository: ExampleUsersRepository) {}

  /**
   * 사용자 검색 서비스
   */
  async searchUsers(searchTerm: string, page: number = 1, limit: number = 10) {
    return this.usersRepository.searchUsers({
      search: searchTerm,
      searchFields: ["name", "nickname"],
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { create_at: "desc" },
    });
  }

  /**
   * 역할별 사용자 조회 서비스
   */
  async getUsersByRole(role: string, page: number = 1, limit: number = 10) {
    return this.usersRepository.getUsersByRole(role, {
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { create_at: "desc" },
    });
  }

  /**
   * 복합 조건으로 사용자 조회 서비스
   */
  async getUsersByComplexCriteria(criteria: {
    role?: string;
    location?: string;
    joinDate?: { start: Date; end: Date };
    search?: string;
  }) {
    const filters: Record<string, any> = {};

    if (criteria.role) {
      filters.role = criteria.role;
    }

    if (criteria.location) {
      filters.address = { contains: criteria.location };
    }

    return this.usersRepository.getUsersByComplexQuery({
      filters,
      search: criteria.search,
      searchFields: ["name", "nickname"],
      dateRange: criteria.joinDate
        ? {
            startDate: criteria.joinDate.start,
            endDate: criteria.joinDate.end,
            field: "create_at",
          }
        : undefined,
      orderBy: { create_at: "desc" },
    });
  }
}
