import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TasksPageGuard } from './tasks-page/guards/tasks-page.guard';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./tasks-page/tasks-page.module').then(
            (m) => m.TasksPageModule
          ),
        canActivate: [TasksPageGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
