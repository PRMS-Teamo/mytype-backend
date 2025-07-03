import { IsString } from "class-validator";

export class stackDetails {
  @IsString()
  category: string;
  @IsString()
  img_url: string;
}
