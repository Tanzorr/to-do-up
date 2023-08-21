import { Task } from "src/app/libs/shared-api/entitis/Tasks";
import { createSelector } from "@ngrx/store";


export const tasksSelector = (state: any) => state.tasksState.tasks;
export const tasksSelectorById = createSelector(
  tasksSelector,
  (state) => {
    return state
  }
);
