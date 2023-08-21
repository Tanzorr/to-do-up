import { createReducer, on } from "@ngrx/store";
import { Task } from "src/app/libs/shared-api/entitis/Tasks";
import {getTaskFail, getTasks, getTasksSuccess} from "./tasks-actions";

export interface TasksStateModel {
  tasks: Task[],
  errorMessage: string
}

const initialState: TasksStateModel = {
  tasks: [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
    }
  ],
  errorMessage: ''
}


export  const tasksReducer = createReducer(
  initialState,
  on(getTasksSuccess, (state, action) => {
    return {...state, tasks: [ ...state.tasks, ...action.value] }
  }),

  on(getTaskFail, (state, action) => {
    return {...state, errorMessage: action.value }
  })
);

