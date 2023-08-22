import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SharedService } from '../../../libs/shared-api/shared.service';
import { getTask, getTaskSuccess } from './task-actions';
import { switchMap, tap } from 'rxjs';
import { Task } from '../../../libs/shared-api/entitis/Tasks';
import { Store } from '@ngrx/store';

@Injectable()
export class TaskEffects {
  getTasks = createEffect(
    () =>
      this._actions$.pipe(
        ofType(getTask),
        switchMap((action: any) => {
          return this._sharedApiService.getSingleItem(action.taskId).pipe(
            tap((task: Task) => {
              this._store.dispatch(getTaskSuccess({ value: task }));
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
