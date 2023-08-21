import { createAction, props } from "@ngrx/store";
import { Task } from "../../libs/shared-api/entitis/Tasks";

export const getTasks = createAction(
  '[Tasks] Get Task',
  props<{value: Task[]}>()
);

export const getTasksById = createAction(
  '[Tasks] Get Task By Id',
  props<{value: Task}>()
);

export const addTask = createAction(
  '[Tasks] Add Task',
  props<{value: Task}>()
);
