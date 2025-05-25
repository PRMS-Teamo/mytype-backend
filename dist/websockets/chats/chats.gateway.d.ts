import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
export declare class ChatsGateway {
    private readonly chatsService;
    constructor(chatsService: ChatsService);
    create(createChatDto: CreateChatDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateChatDto: UpdateChatDto): string;
    remove(id: number): string;
}
