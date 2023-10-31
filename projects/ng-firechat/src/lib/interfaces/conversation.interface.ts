export interface Conversation {
  uid: string;
  name: string;
  chatId: string;
  lastMessage: string;
  read: 0;
  unreadCount: number;
  timestamp?: number;
}
