import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getTasks} from "./tasks-actions";
import {tap} from "rxjs";

export class TasksEffects {
  tasks = createEffect(()=> this._actions$.pipe(
    ofType(getTasks),
    tap((action) => {
      console.log(action);

    })
  ),
    {
      dispatch: false
    });

  constructor(private _actions$: Actions) {
  }
}
