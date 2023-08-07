import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskPageComponent } from './edit-task-page.component';
import { EditTaskPageRoutingModule } from "./edit-task-page-routing.module";

@NgModule({
  declarations: [
    EditTaskPageComponent
  ],
  imports: [
    CommonModule,
    EditTaskPageRoutingModule
  ]
})
export class EditTaskPageModule { }
