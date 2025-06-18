import { Injectable, UnauthorizedException } from '@nestjs/common'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

const users = {} // 유저 정보 임의 저장
const stateTokens = {}

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
  kakaoLogin(user: any) {
    const accessToken = this.generateToken(user, true)
    const refreshToken = this.generateToken(user, false)
    const token = {
      accessToken,
      refreshToken,
    }
    return token
  }

  generateToken(user: any, isAccessToken: boolean) {
    const payload = {
      sub: user.id,
      nickname: user.username || user.displayName,
      type: isAccessToken ? 'access' : 'refresh',
    }
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_KEY'),
      expiresIn: isAccessToken ? 300 : 3600,
    })
    return token
  }

  extractTokenFromHeader(header: string) {
    const splitToken = header.split(' ')
    if (splitToken.length !== 2 || splitToken[0] !== 'Bearer') {
      throw new UnauthorizedException('Wrong Token')
    }
    const token = splitToken[1]
    return token
  }

  verifyToken(token: string) {
    console.log('input token value', token)
    try {
      const result = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_KEY'),
      })
      return result
    } catch (error) {
      throw new UnauthorizedException('만료되거나 잘못된 토큰입니다.', error)
    }
  }
}
