import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from "./libs/shared-api/shared.service";
import { AppRoutingModule } from "./app-routing.module";
import { firebaseConfig } from "./config/db-config";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ListViewToolbarActionsComponent
} from './libs/layouts/list-view-layout/list-view-toolbar-actions/list-view-toolbar-actions.component';


@NgModule({
  declarations: [
    AppComponent,
    ListViewToolbarActionsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  exports: [
    ListViewToolbarActionsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
