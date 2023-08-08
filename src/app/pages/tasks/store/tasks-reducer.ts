import { createReducer } from "@ngrx/store";

const initialState = {
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
    }
  ]
}

export  const tasksReducer = createReducer(
  initialState,
);

