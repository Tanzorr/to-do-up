import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SharedService } from '../../../libs/shared-api/shared.service';
import {
  getTask,
  getTaskFail,
  getTaskSuccess,
  updateTask,
} from './task-actions';
import { catchError, switchMap, tap, withLatestFrom } from 'rxjs';
import { Task } from '../../../libs/shared-api/entitis/Tasks';
import { Store } from '@ngrx/store';
import { getCurrentRouteId } from '../../route/selectors';

@Injectable()
export class TaskEffects {
  getTasks = createEffect(
    () =>
      this._actions$.pipe(
        ofType(getTask),
        withLatestFrom(this._store.select(getCurrentRouteId)),
        switchMap(([action, taskId]) => {
          return this._sharedApiService.getSingleItem(taskId).pipe(
            tap((task: Task) => {
              this._store.dispatch(getTaskSuccess({ value: task }));

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

  updateTask = createEffect(
    () =>
      this._actions$.pipe(
        ofType(updateTask),
        withLatestFrom(this._store.select(getCurrentRouteId)),
        switchMap(([action, taskId]) => {
          const { title, description } = action.value;
          const task = {
            title,
            description,
            id: taskId,
          };

          return this._sharedApiService.updateTask(task).pipe(
            tap((task: Task) => {
              this._store.dispatch(getTaskSuccess({ value: task }));

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

  constructor(
    private _actions$: Actions,
    private _store: Store<{ tasks: Task }>,
    private _sharedApiService: SharedService
  ) {}
}
