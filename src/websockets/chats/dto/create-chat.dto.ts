import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";

export class CreateChatDto {
  @ApiProperty({ description: "채팅방 ID" })
  @IsString()
  roomId: string;

  @ApiProperty({ description: "메시지 내용" })
  @IsString()
  message: string;

  @ApiProperty({ description: "송신자 ID" })
  @IsString()
  senderId: string;

  @ApiProperty({ description: "메시지 타입", required: false })
  @IsOptional()
  @IsString()
  type?: string;
}
