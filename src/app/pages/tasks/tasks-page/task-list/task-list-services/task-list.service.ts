import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import { Task } from 'src/app/libs/shared-api/entitis/Tasks';
import { getTasks } from 'src/app/store/tasks/tasks-actions';
import {tasksSelector} from "../../../../../store/tasks/tasks-selector";

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  // @ts-ignore
  tasks$ = this._store.select(tasksSelector);
  constructor(private _store: Store<{tasks: []}>) {
  }

  getTasks(): void {
    this._store.dispatch(getTasks());
  }
}
