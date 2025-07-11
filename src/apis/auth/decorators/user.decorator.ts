import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AuthenticatedUser } from "../types/authenticated-user.interface";

/**
 * @description Request 객체에서 인증된 사용자 정보를 추출: id
 * `@UseGuards(JwtAuthGuard)` 와 함께 사용해야 합니다.
 */
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): AuthenticatedUser => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as AuthenticatedUser;
  },
);
