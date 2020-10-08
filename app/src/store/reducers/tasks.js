import { actionTypes } from '../actions/tasks';

const initialState = {
  tasks: null
}

const reducer = (state = initialState, action) => {
  let tasks;

  if (state.tasks) {
    tasks = [...state.tasks];
  }

  switch (action.type) {
    case actionTypes.LOAD_TASKS:
      tasks = action.tasks;
      break;
    case actionTypes.ADD_TASK:
      tasks.push(action.task);
      break;
    case actionTypes.DELETE_TASK:
      const index = tasks.findIndex(task => {
        return task.id === action.id;
      });
      tasks.splice(index, 1);
      break;
    case actionTypes.UPDATE_TASK_STATUS:
      const task = tasks.find(t => {
        return t.id === action.id;
      });
      task.status = action.status;
      break;
    default:
      break;
  }

  return {
    tasks: tasks
  };
}

export default reducer;