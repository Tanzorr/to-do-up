import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './libs/shared-api/shared.service';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from './config/db-config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './store/tasks/tasks.effects';
import { StoreModule } from '@ngrx/store';
import { tasksReducer } from './store/tasks/tasks-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TaskEffects } from './store/tasks/task/task-effects';
import { taskReducer } from './store/tasks/task/task-reducer';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { TasksSerializer } from './store/tasks/TasksSerializer';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    StoreModule.forRoot({
      tasksState: tasksReducer,
      taskState: taskReducer,
      router: routerReducer,
    }),
    EffectsModule.forRoot([TasksEffects, TaskEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: TasksSerializer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
  ],
  providers: [SharedService],
})
export class AppModule {}
