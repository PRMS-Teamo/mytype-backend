import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/config/prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.testUser.findMany()
  }
}
