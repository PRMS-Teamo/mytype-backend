import { Injectable } from "@nestjs/common";
import { CreateChatDto } from "./dto/create-chat.dto";
import { UpdateChatDto } from "./dto/update-chat.dto";
import { MongoService } from "../../../infrastructure/database/mongo/mongo.service";

@Injectable()
export class ChatsService {
  constructor(private readonly mongoService: MongoService) {}

  async create(createChatDto: CreateChatDto) {
    return await this.mongoService.chatMessage.create({
      data: {
        roomId: createChatDto.roomId,
        senderId: createChatDto.senderId,
        text: createChatDto.message,
        sentAt: new Date(),
      },
    });
  }

  findAll() {
    return "This action returns all chats";
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }

  async getMessages(
    roomId: string,
    beforeTimestamp?: Date,
    limit: number = 50,
  ) {
    const query: any = { roomId };
    if (beforeTimestamp) {
      query.sentAt = { $lt: beforeTimestamp };
    }
    return await this.mongoService.chatMessage.findMany({
      where: query,
      orderBy: { sentAt: "desc" },
      take: limit,
    });
  }
}
