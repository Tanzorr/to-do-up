import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {provideFirebaseApp, getApp, initializeApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {SharedService} from "./libs/shared-api/shared.service";
import {AppRoutingModule} from "./app-routing.module";
import {firebaseConfig} from "./config/db-config";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule, provideEffects } from "@ngrx/effects";
import {TasksEffects} from "./store/tasks/tasks.effects";
import {StoreModule} from "@ngrx/store";
import {tasksReducer} from "./store/tasks/tasks-reducer";


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    StoreModule.forRoot({
      tasks: tasksReducer
    }),
    EffectsModule.forRoot([
      TasksEffects
    ])
  ],
  providers: [SharedService],
})
export class AppModule {
}
