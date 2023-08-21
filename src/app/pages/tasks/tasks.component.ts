import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { from, Observable } from "rxjs";
import { Task } from 'src/app/libs/shared-api/entitis/Tasks';
import { getTasks } from "../../store/tasks/tasks-actions";
import { tasksSelector, tasksSelectorById } from "../../store/tasks/tasks-selector";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {
  tasks$: Observable<Task[]> = from([]);

  constructor(private _store: Store<{tasks: []}>) {

    this.tasks$ = this._store.select(tasksSelectorById);
    this._store.dispatch(getTasks({value: [{
      id: '2',
      title: 'Task 1',
      description: 'Description 1',
      }]}));
  }


}
