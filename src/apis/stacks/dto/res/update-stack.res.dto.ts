import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { IsString } from "class-validator";
import { CreateStackResDto } from "./create-stack.res.dto";

export class UpdateStackResDto extends PartialType(CreateStackResDto) {
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
