import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskPageComponent } from './edit-task-page.component';
import { EditTaskPageRoutingModule } from "./edit-task-page-routing.module";
import { OneColumnLayoutComponent } from "../../../libs/layouts/one-column-layout/one-column-layout.component";
import { EntityPageLayoutModule } from "../../../libs/layouts/entity-page-layout/entity-page-layout.module";
import { TaskFormModule } from "../../../libs/tasks/task-form/task-form.module";
import { BreadcrumbInterface } from "../../../libs/ui/breadcrub/breadcrumb.interface";
import { BreadcrumbModule } from "../../../libs/ui/breadcrub/breadcrumb.module";

const breadcrumbs: BreadcrumbInterface[] = [
  {
    label: 'Tasks',
    path: '/app/tasks'
  },
  {
    label: 'Edit Task',
  }
];


@NgModule({
  declarations: [
    EditTaskPageComponent
  ],
  imports: [
    CommonModule,
    EditTaskPageRoutingModule,
    OneColumnLayoutComponent,
    EntityPageLayoutModule,
    TaskFormModule,
    BreadcrumbModule
  ]
})
export class EditTaskPageModule { }
