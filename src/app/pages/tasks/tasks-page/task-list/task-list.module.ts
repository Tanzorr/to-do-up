import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TasksListRoutingModule } from "./task-list-routing.module";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TaskListTableModule } from "../../../../libs/task-list-table/task-list-table.module";
import { OneColumnLayoutComponent } from "../../../../libs/layouts/one-column-layout/one-column-layout.component";



@NgModule({
  declarations: [
    TaskListComponent
  ],
    imports: [
        CommonModule,
        TasksListRoutingModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        TaskListTableModule,
        OneColumnLayoutComponent
    ]
})
export class TaskListModule { }
