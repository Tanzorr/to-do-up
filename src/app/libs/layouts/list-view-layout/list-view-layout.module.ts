import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewLayoutComponent } from './list-view-layout.component';
import { ListViewToolbarComponent } from './list-view-toolbar/list-view-toolbar.component';
import { ListViewToolbarSearchComponent } from './list-view-toolbar-search/list-view-toolbar-search.component';
import { ListViewToolbarActionsComponent } from "./list-view-toolbar-actions/list-view-toolbar-actions.component";



@NgModule({
    declarations: [
        ListViewLayoutComponent,
        ListViewToolbarComponent,
        ListViewToolbarSearchComponent,
        ListViewToolbarActionsComponent
    ],
  exports: [
    ListViewLayoutComponent,
    ListViewToolbarComponent,
    ListViewToolbarSearchComponent,
    ListViewToolbarActionsComponent
  ],
    imports: [
        CommonModule
    ]
})
export class ListViewLayoutModule { }
