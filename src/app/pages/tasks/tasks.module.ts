import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from "./tasks-routing.module";
import { StoreModule } from "@ngrx/store";
import { tasksReducer } from "./store/tasks-reducer";


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
