import { createReducer, on } from "@ngrx/store";
import { Task } from "src/app/libs/shared-api/entitis/Tasks";
import { getTasks } from "./tasks-actions";

interface stateModel {
  tasks: Task[]
}

const initialState: stateModel = {
  tasks: [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
    }
  ]
}


export  const tasksReducer = createReducer(
  initialState,
  on(getTasks, (state, action) => {
    return {...state, tasks: [ ...state.tasks, ...action.value] }
  })
);

