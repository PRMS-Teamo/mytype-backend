import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

/**
 * @description JWT `refresh` token을 사용하는 guard입니다.
 * @example
 * ```
 * @UseGuards(RefreshTokenGuard)
 * ```
 */
@Injectable()
export class RefreshTokenGuard extends AuthGuard("jwt-refresh") {}
