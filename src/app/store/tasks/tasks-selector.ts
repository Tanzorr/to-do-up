import { Task } from "src/app/libs/shared-api/entitis/Tasks";
import { createSelector } from "@ngrx/store";


export const tasksSelector = (state: { tasks: Task[] }) => state.tasks;
export const tasksSelectorById = createSelector(
  tasksSelector,
  (state) => {
    return state
  }
);
