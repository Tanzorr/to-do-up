import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewLayoutComponent } from './list-view-layout.component';
import { ListViewToolbarComponent } from './list-view-toolbar/list-view-toolbar.component';
import { ListViewToolbarSearchComponent } from './list-view-toolbar-search/list-view-toolbar-search.component';



@NgModule({
    declarations: [
        ListViewLayoutComponent,
        ListViewToolbarComponent,
        ListViewToolbarSearchComponent
    ],
  exports: [
    ListViewLayoutComponent,
    ListViewToolbarComponent,
    ListViewToolbarSearchComponent
  ],
    imports: [
        CommonModule
    ]
})
export class ListViewLayoutModule { }
