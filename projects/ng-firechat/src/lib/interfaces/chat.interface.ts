import { Message } from "./message.interface";

export interface Chat {
  chatId: any;
  createdAt: number;
  updatedAt: number;
  messages: Array<Message>;
}
