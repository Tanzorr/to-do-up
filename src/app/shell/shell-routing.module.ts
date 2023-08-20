// @ts-ignore
import { NgModule } from "@angular/core";
// @ts-ignore
import { RouterModule, Routes } from "@angular/router";
import { ShellComponent } from "./shell.component";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'tasks',
        loadChildren: () => import('../pages/tasks/tasks.module').then(m => m.TasksModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {
}
