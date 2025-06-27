import { ApiProperty } from "@nestjs/swagger";

export class TokenDto {
  @ApiProperty({ example: "access_token_example" })
  accessToken: string;

  @ApiProperty({ example: "refresh_token_example" })
  refreshToken: string;
}

export class KakaoCallbackResponseDto {
  @ApiProperty({ example: "12345678", description: "카카오 사용자 ID" })
  kakaoId: string;

  @ApiProperty({ example: "한지웅" })
  username?: string;

  @ApiProperty({ example: "한지웅" })
  displayName?: string;

  @ApiProperty({ type: TokenDto })
  tokens: TokenDto;
}
