import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
    declarations: [
        TaskFormComponent
    ],
    exports: [
        TaskFormComponent
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class TaskFormModule { }
