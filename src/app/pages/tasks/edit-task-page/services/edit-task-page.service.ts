import { Injectable } from '@angular/core';
import { taskSelector } from '../../../../store/tasks/task/task-selector';
import { Store } from '@ngrx/store';
import { Task } from '../../../../libs/shared-api/entitis/Tasks';
import { getTask, updateTask } from 'src/app/store/tasks/task/task-actions';

@Injectable({
  providedIn: 'root',
})
export class EditTaskPageService {
  task$ = this._store.select(taskSelector);

  constructor(private _store: Store<{ task: Task }>) {}

  getTask(): void {
    this._store.dispatch(getTask());
  }

  updateTask(task: Task): void {
    this._store.dispatch(updateTask({ value: task }));
  }
}
