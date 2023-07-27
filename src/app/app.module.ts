import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from "./shared.service";

export const firebaseConfig = {
  apiKey: "AIzaSyB0H5AJwiUOE5sD4fA7QkRRuTXh7VRMa2E",
  authDomain: "kambanfire.firebaseapp.com",
  projectId: "kambanfire",
  storageBucket: "kambanfire.appspot.com",
  messagingSenderId: "929942247402",
  appId: "1:929942247402:web:f461af38cd2f9860050493",
  measurementId: "G-6RJ5QLWWEL"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
