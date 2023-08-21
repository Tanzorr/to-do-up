import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getTaskFail, getTasks, getTasksSuccess} from "./tasks-actions";
import {catchError, switchMap, tap, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {tasksSelector} from "./tasks-selector";
import {Task} from "../../libs/shared-api/entitis/Tasks";
import {SharedService} from "../../libs/shared-api/shared.service";
import {set} from "@angular/fire/database";

@Injectable()
export class TasksEffects {
	getTasks = createEffect(() => this._actions$.pipe(
			ofType(getTasks),
			withLatestFrom(this._store.select(tasksSelector)),
			switchMap(() => {
				return this._sharedApiService.getTasks().pipe(
					tap((tasks :Task[]) => {
						console.log({tasks});
						this._store.dispatch(getTasksSuccess({value: tasks}));
						catchError((error) => {
							console.log(error);
							this._store.dispatch(getTaskFail({value: error}));
							return error;
						});
					}));
			})
		),
		{
			dispatch: false
		});

	constructor(
		private _actions$ :Actions,
		private _store :Store<{ tasks :Task[] }>,
		private _sharedApiService :SharedService
	) {
	}
}
