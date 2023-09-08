import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/libs/shared-api/entitis/Tasks';

export const getTask = createAction('[Tasks] Get Task');

export const getTaskSuccess = createAction(
  '[Tasks] Get Task Success',
  props<{ value: Task }>()
);

export const getTaskFail = createAction(
  '[Tasks] Get Task Fail',
  props<{ value: string }>()
);

export const updateTask = createAction(
  '[Tasks] Update Task',
  props<{ value: Task }>()
);

export const updateTaskSuccess = createAction(
  '[Tasks] Update Task Success',
  props<{ value: Task }>()
);

export const updateTaskFail = createAction(
  '[Tasks] Update Task Fail',
  props<{ value: string }>()
);
