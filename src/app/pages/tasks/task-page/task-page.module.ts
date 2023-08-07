import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './task-page.component';
import { TaskPageRoutingModule } from "./task-page-routing.module";
import { EntityPageLayoutModule } from "../../../libs/layouts/entity-page-layout/entity-page-layout.module";
import { BreadcrumbModule } from "../../../libs/ui/breadcrub/breadcrumb.module";



@NgModule({
  declarations: [
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    TaskPageRoutingModule,
    EntityPageLayoutModule,
    BreadcrumbModule
  ]
})
export class TaskPageModule { }
