import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

interface PaginationOptions {
  defaultPage?: number;
  defaultLimit?: number;
  maxLimit?: number;
  optional?: boolean; // 선택적 페이지네이션 여부
}

export interface PaginationMeta {
  skip: number;
  take: number;
  page: number;
  limit: number;
  enabled: boolean; // 페이지네이션이 적용되었는지 여부
}

function parseQueryParam(value: unknown, defaultValue: number): number {
  // 쿼리 파라미터가 없는 경우
  if (value === undefined || value === null) {
    return defaultValue;
  }

  // 빈 문자열인 경우
  if (value === "") {
    return defaultValue;
  }

  // 문자열인 경우 파싱 시도
  if (typeof value === "string") {
    const parsed = parseInt(value, 10);
    return !isNaN(parsed) && isFinite(parsed) ? parsed : defaultValue;
  }

  // 배열인 경우 (Express에서 같은 키로 여러 값이 올 수 있음)
  if (Array.isArray(value)) {
    const firstValue = value[0];
    return parseQueryParam(firstValue, defaultValue);
  }

  // 기타 경우 기본값 반환
  return defaultValue;
}

export const Pagination = createParamDecorator(
  (options: PaginationOptions = {}, ctx: ExecutionContext): PaginationMeta => {
    const req = ctx.switchToHttp().getRequest<Request>();

    const defaultPage = options.defaultPage || 1;
    const defaultLimit = options.defaultLimit || 10;
    const maxLimit = options.maxLimit || 100;
    const optional = options.optional || false;

    // 쿼리 파라미터 존재 여부 확인
    const hasPageParam = req.query.page !== undefined && req.query.page !== "";
    const hasLimitParam =
      req.query.limit !== undefined && req.query.limit !== "";

    // 선택적 페이지네이션이고 파라미터가 없으면 비활성화
    if (optional && !hasPageParam && !hasLimitParam) {
      return {
        skip: 0,
        take: 0,
        page: 0,
        limit: 0,
        enabled: false,
      };
    }

    let pageNum = parseQueryParam(req.query.page, defaultPage);
    let limitNum = parseQueryParam(req.query.limit, defaultLimit);

    if (pageNum < 1) pageNum = defaultPage;
    if (limitNum < 1 || limitNum > maxLimit) limitNum = defaultLimit;

    return {
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
      page: pageNum,
      limit: limitNum,
      enabled: true,
    };
  },
);
