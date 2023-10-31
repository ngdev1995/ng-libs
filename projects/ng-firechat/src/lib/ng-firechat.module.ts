import { NgModule } from '@angular/core';
import { NgFirechatComponent } from './components/ng-firechat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgFireChatWidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [
    NgFirechatComponent,
    NgFireChatWidgetComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    NgFirechatComponent
  ]
})
export class NgFirechatModule { }
