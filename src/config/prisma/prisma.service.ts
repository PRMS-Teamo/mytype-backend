import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly configService: ConfigService) {
    super() // 먼저 상속만 하고, 실제 연결은 onModuleInit에서 수행
  }

  async onModuleInit() {
    try {
      const url = this.configService.get<string>('DATABASE_URL')
      if (!url) {
        throw new Error('DATABASE_URL is not defined in .env')
      }

      this.$connect = () =>
        new PrismaClient({
          datasources: {
            db: {
              url,
            },
          },
        }).$connect()

      await this.$connect()
      console.log('✅ Connected to PostgreSQL via Prisma')
    } catch (error) {
      console.error('Failed to connect to PostgreSQL:', error)
      throw error
    }
  }

  async onModuleDestroy() {
    try {
      await this.$disconnect()
      console.log('Disconnected from PostgreSQL')
    } catch (error) {
      console.error('Failed to disconnect from PostgreSQL:', error)
      throw error
    }
  }
}
