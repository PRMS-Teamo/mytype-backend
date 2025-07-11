import { stacks } from "@postgres-client";

export class Stack {
  id: string;
  name: string;

  constructor(stack: stacks) {
    this.id = stack.id;
    this.name = stack.name ?? "unknown";
  }
}
