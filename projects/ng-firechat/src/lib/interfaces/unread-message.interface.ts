export interface UnreadMessage {
  chatId: string;
  messageAt: number;
  messageId: string;
  notfication_send: number;
  receiverId: string;
  senderId: string;
  unreadMessagesCount: number;
  unreadMessagesRef: any;
}
