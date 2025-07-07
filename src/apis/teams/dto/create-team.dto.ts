import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEnum } from "class-validator";

import { proceed_type } from "@/prisma/postgres/postgres-client";
import {
  stacks,
  stack_categories,
  positions,
  team_stack_positions,
} from "@/prisma/postgres/postgres-client";

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

  @ApiProperty({ example: "BOTH", enum: proceed_type })
  @IsEnum(proceed_type)
  proceed_type: proceed_type;

  @ApiProperty({ example: "이미지 형태 아직 미정" })
  img: any;
}
/**
 * {
  "title": "마이타입",
  "content": "자바스크립트로 세상을 지배하겠다는 목표를 가지신분",
  "proceed_type": "BOTH",
  "img": "이미지",
  "position_stacks": [
    {
      "position_id": "position_id",
      "stacks": ["stack_id",...],
      "count": 3
    },
    ...
  ]
} 

*service 에서 쿼리로직 및 유효성 검사에서 필요로하는 것
* null 체크
* recruit_status 체크
* status 컬럼 삭제 -- 이용 안함
* position_stacks 객체 타입을  create-team.dto 에 생성 -> prositions, stacks 스키마 타입을 이용해 조립
* 1 개의 position_stacks 객체타입을 선언할 수 있으면 position_stacks [] 타입으로 선언

  */
