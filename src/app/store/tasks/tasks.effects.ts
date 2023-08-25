import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addTask,
  addTaskSuccess,
  deleteTask,
  getTaskFail,
  getTasks,
  getTasksSuccess,
} from './tasks-actions';
import { catchError, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tasksSelector } from './tasks-selector';
import { Task } from '../../libs/shared-api/entitis/Tasks';
import { SharedService } from '../../libs/shared-api/shared.service';

@Injectable()
export class TasksEffects {
  getTasks = createEffect(
    () =>
      this._actions$.pipe(
        ofType(getTasks),
        withLatestFrom(this._store.select(tasksSelector)),
        switchMap(() => {
          return this._sharedApiService.getTasks().pipe(
            tap((tasks: Task[]) => {
              this._store.dispatch(getTasksSuccess({ value: tasks }));
              catchError((error) => {
                this._store.dispatch(getTaskFail({ value: error }));
                return error;
              });
            })
          );
        })
      ),
    {
      dispatch: false,
    }
  );

  addTask = createEffect(
    () =>
      this._actions$.pipe(
        ofType(addTask),

        switchMap((task) => {
          return this._sharedApiService.addTask(task.value).pipe(
            tap(() => {
              this._store.dispatch(addTaskSuccess({ value: task.value }));

              catchError((error) => {
                this._store.dispatch(getTaskFail({ value: error }));
                return error;
              });
            })
          );
        })
      ),
    {
      dispatch: false,
    }
  );

  // @ts-ignore
  deleteTask = createEffect(() => {
    return this._actions$.pipe(
      ofType(deleteTask),
      switchMap((taskId) => {
        this._sharedApiService.deleteTask2(taskId.value);
        return of(taskId.value);
      })
    );
  });

  constructor(
    private _actions$: Actions,
    private _store: Store<{ tasks: Task[] }>,
    private _sharedApiService: SharedService
  ) {}
}
