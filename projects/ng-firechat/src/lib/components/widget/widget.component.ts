import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-ng-firechat-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class NgFireChatWidgetComponent {
  @Input() userChat:any;
  @ViewChild("scrollMe", { static: false })
  @Output() removeActiveChat = new EventEmitter<string>();
  @Output() updateUserToActiveParticipant = new EventEmitter<any>();

}
