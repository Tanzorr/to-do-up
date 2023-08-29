import { Injectable } from '@angular/core';
import { Task } from '../../../../libs/shared-api/entitis/Tasks';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/store/tasks/tasks-actions';

@Injectable({
  providedIn: 'root',
})
export class AddTaskPageService {
  constructor(private _store: Store) {}

  addTask(task: Task): void {
    this._store.dispatch(addTask({ value: task }));
  }
}
