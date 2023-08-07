import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListTableComponent } from './task-list-table.component';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";



@NgModule({
  declarations: [
    TaskListTableComponent
  ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        RouterLink
    ],
  exports: [
    TaskListTableComponent
  ]
})
export class TaskListTableModule { }
