import { Injectable } from '@angular/core';
import { Task } from '../../../../libs/shared-api/entitis/Tasks';
import { Store } from '@ngrx/store';
import { taskSelector } from '../../../../store/tasks/task/task-selector';
import { getTask } from 'src/app/store/tasks/task/task-actions';

@Injectable({
  providedIn: 'root',
})
export class TaskPageService {
  task$ = this._store.select(taskSelector);

  constructor(private _store: Store<{ task: Task }>) {}

  getTask(): void {
    this._store.dispatch(getTask());
  }
}
