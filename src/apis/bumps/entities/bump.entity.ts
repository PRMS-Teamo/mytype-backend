import { Injectable } from "@nestjs/common";

@Injectable()
export class Bumps {
  id: string;
  bumpCount: number = 0;
  bumpLimit: number = 1;
  nextAvailableAt: Date = new Date();
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
}
