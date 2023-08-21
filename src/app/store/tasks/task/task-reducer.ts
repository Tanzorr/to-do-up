import { Task } from "src/app/libs/shared-api/entitis/Tasks";
import {createReducer, on} from "@ngrx/store";
import {getTasksSuccess} from "../tasks-actions";
import {getTaskFail} from "./task-actions";

export interface TaskStateModel {
	  tasks: Task[],
	  errorMessage: string
}

const initialState: TaskStateModel = {
	  tasks: [
		      {
				  			            id: '1',
				  			            title: 'Task 1',
				  			            description: 'Description 1',

			  }
			  		    ],
	  errorMessage: ''
}

export  const taskReducer = createReducer(
	  initialState,
	  on(getTasksSuccess, (state, action) => {
		      return {...state, tasks: [ ...state.tasks, ...action.value] }
	  }),

	  on(getTaskFail, (state, action) => {
		      return {...state, errorMessage: action.value }
	  })

);
