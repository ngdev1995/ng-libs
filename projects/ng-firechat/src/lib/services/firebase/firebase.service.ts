import { Injectable, Inject } from '@angular/core';
import { config } from '../../interfaces/config.interface';
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  refs = {
    _users : "users/",
    _conversations : "conversations/",
    _notifications : "/notifications/",
    _unreadChats : "/unread_chats/",
    _recentLogins : "/recent_logins/",
  }
  private config!: config;

  private db: any = null;

  constructor(@Inject('FIREBASE_CONFIG') private firebaseConfig: config) {
    this.config = firebaseConfig;
    const app = firebase.initializeApp(this.config);
    this.db = firebase.database(app);
  }

  get firbaseConfig() {
    return this.config
  }

  get database () {
    return this.db;
  }

  createOrUpdate(uid: string, user: User) {
    return firebase
      .database()
      .ref(this.refs._users)
      .orderByChild("uid")
      .equalTo(uid)
      .once("value", (snapshot) => {
        if (snapshot.exists()) {
          let active = snapshot.val();
          user.activeStatus += active[uid].active_status || 0;
          this.updateUser(uid, user);
        } else {
          firebase
            .database()
            .ref(this.refs._users + uid)
            .set(user);
        }
      });
  }

  updateUser(uid: string, user: User) {
    return firebase
      .database()
      .ref(this.refs._users + uid)
      .update(user);
  }

}
