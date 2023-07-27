import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('./shell/shell.module').then(m => m.ShellModule)
  },
  {
    path: '**',
    redirectTo: 'app'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
