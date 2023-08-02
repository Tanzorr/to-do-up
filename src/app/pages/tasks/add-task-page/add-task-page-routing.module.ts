import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AddTaskPageComponent } from "./add-task-page.component";


const routes: Routes = [
  {
    path: '',
    component: AddTaskPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTaskPageRoutingModule {

}
