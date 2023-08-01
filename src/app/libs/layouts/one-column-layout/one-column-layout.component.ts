import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-column-layout',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./one-column-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneColumnLayoutComponent {

}
