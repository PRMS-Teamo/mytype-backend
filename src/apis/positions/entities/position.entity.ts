import { positions } from "@postgres-client";

export class Position {
  id: string;
  name: string;

  constructor(position: positions) {
    this.id = position.id;
    this.name = position.name;
  }
}
