import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksPageComponent } from "./tasks-page.component";


const routes: Routes = [
  {
    path: '',
    component: TasksPageComponent,
    loadChildren: () => import('./task-list/task-list.module').then(m => m.TaskListModule),
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'add',
    loadChildren: () => import('../add-task-page/add-task-page.module').then(m => m.AddTaskModule),
  },
  {
    path: ':id',
    loadChildren: () => import('../task-page/task-page.module').then(m => m.TaskPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksPageRoutingModule {
}
