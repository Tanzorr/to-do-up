import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './tasks-page.component';
import { TasksPageRoutingModule } from "./tasks-page-routing.module";
import { ListViewLayoutModule } from "../../../libs/layouts/list-view-layout/list-view-layout.module";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    TasksPageComponent
  ],
  imports: [
    CommonModule,
    TasksPageRoutingModule,
    ListViewLayoutModule,
    MatButtonModule
  ]
})
export class TasksPageModule { }
