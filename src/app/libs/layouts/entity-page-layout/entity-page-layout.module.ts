import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityPageLayoutComponent } from './entity-page-layout.component';
import { EntityPageToolBarComponent } from './entity-page-tool-bar/entity-page-tool-bar.component';



@NgModule({
  declarations: [
    EntityPageLayoutComponent,
    EntityPageToolBarComponent
  ],
  exports: [
    EntityPageLayoutComponent,
    EntityPageToolBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EntityPageLayoutModule { }
