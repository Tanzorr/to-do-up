import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addTask,
  addTaskSuccess,
  deleteTask,
  deleteTaskSuccess,
  getTasks,
  getTasksFail,
  getTasksSuccess,
} from './tasks-actions';
import { catchError, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tasksSelector } from './tasks-selector';
import { Task } from '../../libs/shared-api/entitis/Tasks';
import { SharedService } from '../../libs/shared-api/shared.service';
import { Router } from '@angular/router';

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
                this._store.dispatch(getTasksFail({ value: error }));
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
        // withLatestFrom(this._store.select(tasksSelector)),
        switchMap((task) => {
          return this._sharedApiService.addTask(task.value).pipe(
            tap(() => {
              this._store.dispatch(addTaskSuccess({ value: task.value }));
              this._router.navigate(['app/tasks']);

              catchError((error) => {
                this._store.dispatch(getTasksFail({ value: error }));

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
  deleteTask = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(deleteTask),
        switchMap((taskId) => {
          this._sharedApiService
            .deleteTask(taskId.value)
            .then((res) => {
              console.log(res);
              this._store.dispatch(deleteTaskSuccess({ value: taskId.value }));
            })
            .catch((error) => {
              this._store.dispatch(getTasksFail({ value: error }));
              return error;
            });

          return of(taskId.value);
        })
      );
    },
    {
      dispatch: false,
    }
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<{ tasks: Task[] }>,
    private _sharedApiService: SharedService,
    private _router: Router
  ) {}
}
