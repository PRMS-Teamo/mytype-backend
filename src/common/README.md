# Common Query Types - NestJS 프로젝트 구성 가이드

## 📁 디렉토리 구조

```
src/common/
├── base/                    # 기본 Repository 클래스들
│   ├── base.postgres.repository.ts
│   └── base.mongo.repository.ts
├── types/                   # 공통 쿼리 타입들
│   ├── index.ts            # 타입 export
│   ├── query.types.ts      # 기본 쿼리 타입
│   ├── pagination.types.ts # 페이지네이션 타입
│   ├── filter.types.ts     # 필터링 타입
│   └── sort.types.ts       # 정렬 타입
└── examples/               # 사용 예시
    └── repository-usage.example.ts
```

## 🎯 목표

- **재사용성**: 모든 서비스에서 공통으로 사용할 수 있는 쿼리 타입 정의
- **타입 안전성**: Prisma 타입과 연동하여 컴파일 타임 에러 방지
- **일관성**: 프로젝트 전체에서 일관된 쿼리 패턴 사용
- **확장성**: 새로운 쿼리 요구사항에 쉽게 대응

## 📋 공통 쿼리 타입

### 1. BaseQueryOptions

기본적인 쿼리 옵션을 정의합니다.

```typescript
interface BaseQueryOptions {
  skip?: number; // 건너뛸 레코드 수
  take?: number; // 가져올 레코드 수
  orderBy?: Prisma.SortOrder | Prisma.SortOrder[]; // 정렬
  select?: Record<string, boolean>; // 선택할 필드
  include?: Record<string, boolean>; // 포함할 관계
}
```

### 2. SearchQueryOptions

검색 기능을 위한 타입입니다.

```typescript
interface SearchQueryOptions extends BaseQueryOptions {
  search?: string; // 검색어
  searchFields?: string[]; // 검색할 필드들
}
```

### 3. FilterQueryOptions

필터링을 위한 타입입니다.

```typescript
interface FilterQueryOptions extends BaseQueryOptions {
  filters?: Record<string, any>; // 필터 조건
}
```

### 4. ComplexQueryOptions

복합적인 쿼리 조건을 위한 타입입니다.

```typescript
interface ComplexQueryOptions extends BaseQueryOptions {
  id?: string; // 단일 ID
  ids?: string[]; // 여러 ID
  search?: string; // 검색어
  searchFields?: string[]; // 검색 필드
  filters?: Record<string, any>; // 필터
  dateRange?: {
    // 날짜 범위
    startDate?: Date;
    endDate?: Date;
    field?: string;
  };
}
```

## 🏗️ Repository 패턴 구현

### BasePostgresRepository 클래스

모든 PostgreSQL Repository의 기본 클래스입니다.

```typescript
@Injectable()
export class BasePostgresRepository<T> {
  constructor(
    protected readonly prisma: PrismaClient,
    protected readonly modelName: string,
  ) {}

  // 기본 CRUD 메서드들
  async findById(options: IdQueryOptions): Promise<T | null>;
  async findByIds(options: IdsQueryOptions): Promise<T[]>;
  async findAll(options?: BaseQueryOptions): Promise<T[]>;
  async search(options: SearchQueryOptions): Promise<T[]>;
  async findByFilters(options: FilterQueryOptions): Promise<T[]>;
  async findByComplexQuery(options: ComplexQueryOptions): Promise<T[]>;
  async create(data: any): Promise<T>;
  async update(id: string, data: any): Promise<T>;
  async delete(id: string): Promise<T>;
  async exists(id: string): Promise<boolean>;
  async count(where?: any): Promise<number>;
}
```

## 💡 사용 예시

### 1. 구체적인 Repository 구현

```typescript
@Injectable()
export class UsersRepository extends BasePostgresRepository<users> {
  constructor(private readonly prisma: PgClient) {
    super(prisma, "users");
  }

  // 사용자 검색
  async searchUsers(options: SearchQueryOptions): Promise<users[]> {
    const searchFields = options.searchFields || ["name", "nickname"];
    return this.search({
      ...options,
      searchFields,
    });
  }

  // 역할별 사용자 조회
  async findByRole(role: string, options?: BaseQueryOptions): Promise<users[]> {
    return this.findByFilters({
      filters: { role },
      ...options,
    });
  }

  // 복합 조건 조회
  async findUsersByComplexQuery(
    options: ComplexQueryOptions,
  ): Promise<users[]> {
    return this.findByComplexQuery(options);
  }
}
```

### 2. 서비스 레이어에서 사용

```typescript
@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  // 사용자 검색 서비스
  async searchUsers(searchTerm: string, page: number = 1, limit: number = 10) {
    return this.usersRepository.searchUsers({
      search: searchTerm,
      searchFields: ["name", "nickname"],
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { create_at: "desc" },
    });
  }

  // 복합 조건으로 사용자 조회
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

    return this.usersRepository.findUsersByComplexQuery({
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
```

## 🔧 Prisma 타입 활용

### 1. Prisma 생성 타입 사용

```typescript
import { users, teams, stacks } from "@/prisma/postgres-client";

// Prisma 모델 타입을 직접 사용
export class UsersRepository extends BasePostgresRepository<users> {
  // ...
}
```

### 2. 타입 안전성 보장

```typescript
// 컴파일 타임에 타입 체크
const user = await this.findById({
  id: "user-id",
  select: {
    id: true,
    name: true,
    // email: true, // 존재하지 않는 필드면 컴파일 에러
  },
  include: {
    positions: true,
    // invalidRelation: true, // 존재하지 않는 관계면 컴파일 에러
  },
});
```

## 📦 모듈 구성

### CommonModule 생성

```typescript
@Module({
  providers: [
    // 공통 Repository들을 여기에 등록
  ],
  exports: [
    // 다른 모듈에서 사용할 Repository들
  ],
})
export class CommonModule {}
```

### 다른 모듈에서 사용

```typescript
@Module({
  imports: [CommonModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
```

## 🚀 확장 방법

### 1. 새로운 쿼리 타입 추가

```typescript
// src/common/types/custom.types.ts
export interface CustomQueryOptions extends BaseQueryOptions {
  customField?: string;
  customFilter?: any;
}
```

### 2. 새로운 Repository 메서드 추가

```typescript
// BasePostgresRepository에 새로운 메서드 추가
async findByCustomQuery(options: CustomQueryOptions): Promise<T[]> {
  // 구현
}
```

### 3. 특정 모델용 Repository 확장

```typescript
export class TeamsRepository extends BasePostgresRepository<teams> {
  // 팀 특화 메서드들
  async findActiveTeams(): Promise<teams[]> {
    return this.findByFilters({
      filters: { recruit_status: "OPEN" },
    });
  }
}
```

## ✅ 장점

1. **코드 재사용**: 공통 로직을 한 곳에서 관리
2. **타입 안전성**: TypeScript와 Prisma 타입 연동
3. **일관성**: 프로젝트 전체에서 동일한 패턴 사용
4. **유지보수성**: 변경사항을 한 곳에서 관리
5. **확장성**: 새로운 요구사항에 쉽게 대응

## 🔍 주의사항

1. **Prisma 클라이언트 버전**: 프로젝트의 Prisma 클라이언트 버전과 일치해야 함
2. **타입 import**: 올바른 경로에서 Prisma 타입을 import해야 함
3. **성능 고려**: 복잡한 쿼리 시 인덱스 최적화 필요
4. **메모리 사용**: 대용량 데이터 조회 시 페이지네이션 필수

이 구조를 통해 NestJS 프로젝트에서 일관되고 타입 안전한 데이터베이스 쿼리를 구현할 수 있습니다.
