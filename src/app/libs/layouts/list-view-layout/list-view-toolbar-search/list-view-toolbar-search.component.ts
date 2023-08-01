import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-view-toolbar-search',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list-view-toolbar-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewToolbarSearchComponent {

}
