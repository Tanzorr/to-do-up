import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-view-toolbar-search',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewToolbarSearchComponent {

}
