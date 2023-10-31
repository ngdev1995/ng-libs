import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgChatModule } from 'dist/ng-chat';
import { environment } from '../environments/environment';
import { NgFirechatModule } from 'projects/ng-firechat/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFirechatModule,
  ],
  providers: [
    {
      provide : 'FIREBASE_CONFIG',
      useValue : environment.firebase
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
