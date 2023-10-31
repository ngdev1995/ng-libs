import { Conversation } from "./conversation.interface";

export interface User {
  uid: string;
  username: string;
  firstName: string;
  lastName: string;
  isChatEnabled: number;
  email: string;
  roleId: number;
  status: number;
  activeStatus: number;
  lastOnline: number;
  timestamp: number;
  photo: string;
  conversations?: Array<any>;
  connections?: Array<any>;
  notifications?: Array<any>;
}
