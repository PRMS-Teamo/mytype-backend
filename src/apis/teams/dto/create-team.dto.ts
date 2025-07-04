import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum } from "class-validator";

export enum ProceedType {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  BOTH = "BOTH",
}
export class CreateTeamDto {
  @ApiProperty({ example: "마이타입" })
  @IsString()
  title: string;

  @ApiProperty({
    example: "자바스크립트로 세상을 지배하겠다는 목표를 가지신분들 오세요.",
  })
  @IsString()
  content: string;

  @IsString()
  user_id: string;

  @ApiProperty({ example: "BOTH", enum: ProceedType })
  @IsEnum(ProceedType)
  proceed_type: ProceedType;

  @ApiProperty({ example: "이미지 형태 아직 미정" })
  img: any;
}
