import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {from, Observable} from "rxjs";
import {Task} from 'src/app/libs/shared-api/entitis/Tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {
  tasks$ :Observable<Task[]> = from([]);

  constructor(private _store :Store<{ tasks :[] }>) {

  }


}
