export const taskSelector = (state: any) => {
  console.log('state', state.taskState);
  return state.taskState.task;
};
