import { Route, RouterModule, Routes } from "@angular/router";
import { EditTaskPageComponent } from "./edit-task-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: EditTaskPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EditTaskPageRoutingModule {
}

