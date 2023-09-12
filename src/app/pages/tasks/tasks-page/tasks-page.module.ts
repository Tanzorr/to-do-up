import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksPageComponent } from './tasks-page.component';
import { TasksPageRoutingModule } from './tasks-page-routing.module';
import { ListViewLayoutModule } from '../../../libs/layouts/list-view-layout/list-view-layout.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SearchBarModule } from '../../../libs/ui/search-bar/search-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksPageComponent],
  imports: [
    CommonModule,
    TasksPageRoutingModule,
    ListViewLayoutModule,
    MatButtonModule,
    MatCardModule,
    SearchBarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TasksPageModule {}
