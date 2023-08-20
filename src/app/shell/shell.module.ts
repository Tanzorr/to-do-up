// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from "./shell-routing.module";
// @ts-ignore
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
// @ts-ignore
import { MatToolbarModule } from "@angular/material/toolbar";
// @ts-ignore
import { MatButtonModule } from "@angular/material/button";




@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class ShellModule { }
