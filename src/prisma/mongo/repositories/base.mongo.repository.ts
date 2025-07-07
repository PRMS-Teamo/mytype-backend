import { Injectable } from "@nestjs/common";

@Injectable()
export class BaseMongoRepository<T> {
  constructor(protected readonly prismaModel: T) {}

  findById(id: string) {
    return (this.prismaModel as any).findUnique({
      where: { id },
    }) as Promise<T>;
  }
}
