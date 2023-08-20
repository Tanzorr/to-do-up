import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-view-toolbar-actions',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list-view-toolbar-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewToolbarActionsComponent {
}
