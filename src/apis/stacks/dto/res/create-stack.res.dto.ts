import { IsNotEmpty, IsString } from "class-validator";
import { Stack } from "../../entities/stack.entity";
import { ApiProperty, PartialType } from "@nestjs/swagger";

export class CreateStackResDto extends PartialType(Stack) {
  constructor(stack: { id: string; name: string }) {
    super();
    this.id = stack.id;
    this.name = stack.name;
  }

  @ApiProperty({
    description: "스택 ID",
    example: "1",
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: "스택 이름",
    example: "React",
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
