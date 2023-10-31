import { Component , inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FirebaseService } from '../services/firebase/firebase.service';


import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { NgFirechatService } from '../services/ng-firechat.service';

@Component({
  selector: 'lib-ng-firechat',
  templateUrl: './ng-firechat.component.html',
  styleUrls: ['./ng-firechat.component.scss'],
  animations: [
    trigger("slideInOut", [
      state("false", style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state("true", style({ height: "0", visibility: "hidden" })),
      transition("false => true", animate(200 + "ms ease-in")),
      transition("true => false", animate(200 + "ms ease-out")),
    ]),
  ],
})
export class NgFirechatComponent {
  constructor(private fire: FirebaseService, public chatService : NgFirechatService) { }

  users = [];
  activeUsersChat = [];
  contacts:any = [];
  userskeys: any;
  chatForm!: FormGroup;
  title: string = 'chatapp';
  showFiller: boolean = false; //sidebar -toggler
  public messages: Array<any> = [] // messages array/
  temp: any; // for handling temporory data from observables.
  showMessages = false; //Toggle to select a conversation.
  message: string = ''; // the  message to be sent
  userFilter = { name: '' };
  profileSLUG!: string;
  allUsers = [];
  currentUser:any;

  deviceService : any = {
    isDesktop : function () { return true}
  }
  howManyItems : number = 0;

  toggleParticipantTab : boolean = false;
  unreadMessageCounter = 0;
  minWidh = 0;
  ngOnInit() { }
  async ngAfterViewInit() {

    this.chatService.signInAnonymously()
    .then(
      async (result) => {

        this.currentUser = await this.chatService.setCurrentUser('pardeepk');
        
        console.log(this.currentUser);
        
      }
    )
    .catch(() => {
      console.log(this.chatService.currentUser);
      
    })
  }


  removeActiveChat(e:any){}
  updateUserToActiveParticipant(e:any){}
  chooseParticipant(e:any){}
  timeAgo(e:any){}
  checkValidChats(){}


  setUpChatWidgets() {
    if (this.deviceService.isDesktop()) {
      this.howManyItems = 3;
    } else if (this.deviceService.isTablet()) this.howManyItems = 1;
    else this.howManyItems = 1;
  }

}
