import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { User } from '../interfaces/user.interface';
import { Chat } from '../interfaces/chat.interface';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class NgFirechatService {
  public firebaseUser: any;
  public prepareLogin: any;
  private temp: any;
  public currentUser!: User;
  public otherUser: any;
  public refUser: any;
  public messages = [];
  isUserActive = 1;
  public chat: Chat = {
    chatId: '',
    messages: [],
    createdAt: 0,
    updatedAt: 0,
  };

  conversationId: any;

  _refUsers = 'users/';
  _refConversations = 'conversations/';
  _refNotifications = '/notifications/';
  _unreadChats = '/unread_chats/';
  _recent_logins = '/recent_logins/';

  constructor() {}

  private startConversation: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);
  public startConversation$: Observable<any[]> =
    this.startConversation.asObservable();

  startConversationByUser(user: any) {
    this.startConversation.next(user);
  }

  _userActionOccured: Subject<void> = new Subject();
  get userActionOccured(): Observable<void> {
    return this._userActionOccured.asObservable();
  }

  notifyUserAction() {
    this._userActionOccured.next();
  }

  async setCurrentUser(uid: string) {
    return new Promise((resolve, reject) => {
      this.getCurrentUser(uid).on(
        'value',
        (snapshot) => {
          this.temp = snapshot.val();
          this.currentUser = this.temp;
          resolve(snapshot.val());
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  getCurrentUser(uid: string) {
    return firebase.database().ref(this._refUsers + uid);
  }

  getChats() {
    return firebase.database().ref(this._refConversations);
  }

  getUsers() {
    return firebase.database().ref(this._refUsers);
  }

  getUserByUID(uid: string) {
    return firebase.database().ref(this._refUsers + uid);
  }

  getChatByUID(chatId: string) {
    return firebase
      .database()
      .ref(this._refConversations + chatId + '/messages')
      .orderByChild('timestamp')
      .limitToLast(2);
  }

  getChat(chatId: string) {
    return firebase
      .database()
      .ref(this._refConversations + chatId + '/messages')
      .orderByChild('timestamp')
      .limitToLast(100);
  }

  /**
   * @method sign in Anonymously
   * @purpose sign in from firebase
   */
  signInAnonymously() {
    if (firebase.auth().currentUser) {
      return new Promise((resolve) => {
        this.firebaseUser = firebase.auth().currentUser;
        resolve(firebase.auth().currentUser);
      });
    } else {
      return firebase.auth().signInAnonymously();
    }
  }

  /**
   * @method signOutAnonymously
   * @purpose signout from firebase
   */
  signOutAnonymously() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        var user = this.firebaseUser;
        user
          .delete()
          .then(() => {
            console.log('User deleted.');
          })
          .catch((error: any) => {
            console.log('// An error happened.', error);
          });
      })
      .catch((error) => {});
  }
}
