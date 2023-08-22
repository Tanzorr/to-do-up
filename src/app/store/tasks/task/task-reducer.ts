import { Task } from 'src/app/libs/shared-api/entitis/Tasks'
import { createReducer, on } from '@ngrx/store'
import { getTaskFail, getTaskSuccess } from './task-actions'

export interface TaskStateModel {
  task: Task | null
  errorMessage: string
}

const initialState: TaskStateModel = {
  task: null,
  errorMessage: '',
}

export const taskReducer = createReducer(
  initialState,
  on(getTaskSuccess, (state, action) => {
    console.log({ action })
    return { ...state, task: action.value }
  }),

  on(getTaskFail, (state, action) => {
    return { ...state, errorMessage: action.value }
  })
)
