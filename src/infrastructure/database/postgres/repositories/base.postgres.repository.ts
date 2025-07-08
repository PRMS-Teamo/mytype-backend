import { Injectable } from "@nestjs/common";
import { PostgresService } from "@/infrastructure/database/postgres/postgres.service";
import {
  BaseQueryOptions,
  IdQueryOptions,
  IdsQueryOptions,
  SearchQueryOptions,
  FilterQueryOptions,
  ComplexQueryOptions,
  PrismaWhereCondition,
  DEFAULT_PAGINATION,
  Sort,
  PaginationRequest,
} from "@/infrastructure/database/postgres/types";

@Injectable()
export class BasePostgresRepository<T> {
  constructor(
    protected readonly prisma: PostgresService,
    protected readonly modelName: string,
  ) {}

  /**
   * ID로 단일 엔티티 조회
   */
  async findById(options: IdQueryOptions): Promise<T | null> {
    const { id, select, include } = options;

    return this.prisma[this.modelName].findUnique({
      where: { id },
      select,
      include,
    }) as Promise<T | null>;
  }

  /**
   * 여러 ID로 엔티티 조회
   */
  async findByIds(options: IdsQueryOptions): Promise<T[]> {
    const { ids, select, include, orderBy, skip, take } = options;

    return this.prisma[this.modelName].findMany({
      where: { id: { in: ids } },
      select,
      include,
      orderBy,
      skip,
      take,
    }) as Promise<T[]>;
  }

  /**
   * 모든 엔티티 조회
   */
  async findAll(options?: BaseQueryOptions): Promise<T[]> {
    const { select, include, orderBy, skip, take } = options || {};

    return (this.prisma as any)[this.modelName].findMany({
      select,
      include,
      orderBy,
      skip,
      take,
    }) as Promise<T[]>;
  }

  /**
   * 검색 기반 조회
   */
  async search(options: SearchQueryOptions): Promise<T[]> {
    const { search, searchFields, select, include, orderBy, skip, take } =
      options;

    if (!search || !searchFields?.length) {
      return this.findAll({ select, include, orderBy, skip, take });
    }

    const whereConditions = searchFields.map((field) => ({
      [field]: { contains: search, mode: "insensitive" as const },
    }));

    return (this.prisma as any)[this.modelName].findMany({
      where: { OR: whereConditions },
      select,
      include,
      orderBy,
      skip,
      take,
    }) as Promise<T[]>;
  }

  /**
   * 필터 기반 조회
   */
  async findByFilters(options: FilterQueryOptions): Promise<T[]> {
    const { filters, select, include, orderBy, skip, take } = options;

    return (this.prisma as any)[this.modelName].findMany({
      where: filters,
      select,
      include,
      orderBy,
      skip,
      take,
    }) as Promise<T[]>;
  }

  /**
   * 복합 쿼리 조회
   */
  async findByComplexQuery(options: ComplexQueryOptions): Promise<T[]> {
    const {
      id,
      ids,
      search,
      searchFields,
      filters,
      dateRange,
      select,
      include,
      pagination,
      orderBy,
    } = options;

    let orderByFinal: Sort | undefined;
    let paginationFinal: PaginationRequest | undefined;
    let where: any = {};

    // ID 조건
    if (id) {
      where.id = id;
    } else if (ids?.length) {
      where.id = { in: ids };
    }

    // 검색 조건
    if (search && searchFields?.length) {
      const searchConditions = searchFields.map((field) => ({
        [field]: { contains: search, mode: "insensitive" as const },
      }));
      where.OR = searchConditions;
    }

    // 필터 조건
    if (filters) {
      where = { ...where, ...filters };
    }

    // 날짜 범위 조건
    if (dateRange) {
      const { startDate, endDate, field = "created_at" } = dateRange;
      if (startDate || endDate) {
        where[field] = {};
        if (startDate) where[field].gte = startDate;
        if (endDate) where[field].lte = endDate;
      }
    }

    // 페이지네이션 조건
    if (pagination) {
      const { page, limit } = pagination;
      if (page && limit) {
        paginationFinal = {
          page,
          limit,
        };
      }
    }

    // 정렬 조건
    if (orderBy) {
      if (typeof orderBy === "object" && "sorts" in orderBy) {
        orderByFinal = orderBy.sorts.map((sort) => ({
          [sort.field]: sort.direction,
        })) as unknown as Sort;
      } else if (typeof orderBy === "object" && "field" in orderBy) {
        orderByFinal = {
          [orderBy.field]: orderBy.direction,
        } as unknown as Sort;
      }
    }

    // 페이지네이션 조건
    if (pagination) {
      paginationFinal = pagination;
    } else {
      paginationFinal = DEFAULT_PAGINATION;
    }

    return (this.prisma as any)[this.modelName].findMany({
      where,
      select,
      include,
      orderBy: orderByFinal,
      skip: paginationFinal.page
        ? (paginationFinal.page - 1) * (paginationFinal.limit ?? 0)
        : 0,
      take: paginationFinal.limit ?? 0,
    }) as Promise<T[]>;
  }

  /**
   * 커스텀 Where 조건으로 조회
   */
  async findByWhere(
    where: PrismaWhereCondition<any>,
    options?: BaseQueryOptions,
  ): Promise<T[]> {
    const { select, include, orderBy, skip, take } = options || {};

    return (this.prisma as any)[this.modelName].findMany({
      where,
      select,
      include,
      orderBy,
      skip,
      take,
    }) as Promise<T[]>;
  }

  /**
   * 엔티티 생성
   */
  async create(data: any): Promise<T> {
    return (this.prisma as any)[this.modelName].create({
      data,
    }) as Promise<T>;
  }

  /**
   * 엔티티 업데이트: PATCH
   */
  async update(id: string, data: any): Promise<T> {
    return (this.prisma as any)[this.modelName].update({
      where: { id },
      data,
    }) as Promise<T>;
  }

  /**
   * 엔티티 업데이트: PUT
   */
  async upsert(where: PrismaWhereCondition<any>, data: any): Promise<T> {
    return (this.prisma as any)[this.modelName].upsert({
      where,
      update: { ...data, id: String(data.id) },
      create: { ...data },
    }) as Promise<T>;
  }

  /**
   * 엔티티 삭제
   */
  async delete(id: string): Promise<T> {
    return (this.prisma as any)[this.modelName].delete({
      where: { id },
    }) as Promise<T>;
  }

  /**
   * 엔티티 존재 여부 확인
   */
  async exists(id: string): Promise<boolean> {
    const count = await (this.prisma as any)[this.modelName].count({
      where: { id },
    });
    return count > 0;
  }

  /**
   * 조건에 따른 엔티티 개수 조회
   */
  async count(where?: any): Promise<number> {
    return (this.prisma as any)[this.modelName].count({
      where,
    }) as Promise<number>;
  }
}
