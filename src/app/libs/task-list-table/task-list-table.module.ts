import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListTableComponent } from './task-list-table.component';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    TaskListTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    TaskListTableComponent
  ]
})
export class TaskListTableModule { }
