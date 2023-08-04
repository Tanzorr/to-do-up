import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskPageComponent } from "./add-task-page.component";
import { AddTaskPageRoutingModule } from "./add-task-page-routing.module";
import { OneColumnLayoutComponent } from "../../../libs/layouts/one-column-layout/one-column-layout.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { BreadcrumbModule } from "../../../libs/ui/breadcrub/breadcrumb.module";




@NgModule({
  declarations: [
    AddTaskPageComponent
  ],
  imports: [
    CommonModule,
    AddTaskPageRoutingModule,
    OneColumnLayoutComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BreadcrumbModule
  ]
})
export class AddTaskModule { }
