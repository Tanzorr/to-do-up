import { createAction, props } from "@ngrx/store";
import { Task } from "../../../libs/shared-api/entitis/Tasks";

export const getTasks = createAction(
  '[Tasks] Get Task',
  props<{value: Task[]}>()
)
