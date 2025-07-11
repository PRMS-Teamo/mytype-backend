import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

/**
 * @description JWT `access` token을 사용하는 guard입니다.
 * @example
 * ```
 * @UseGuards(JwtAuthGuard)
 * ```
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {}
