import { createAction, props } from '@ngrx/store'
import { Task } from 'src/app/libs/shared-api/entitis/Tasks'

export const getTask = createAction(
  '[Tasks] Get Task',
  props<{ taskId: string }>()
)

export const getTaskSuccess = createAction(
  '[Tasks] Get Task Success',
  props<{ value: Task }>()
)

export const getTaskFail = createAction(
  '[Tasks] Get Task Fail',
  props<{ value: string }>()
)
