import { GET_TASK, GET_TASKS, GET_MY_BOARD } from '../../types';

const tasksReducer = (state, action) => {
  switch(action.type){
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case GET_TASK:
      return {
        ...state,
        task: action.payload
      }
    case GET_MY_BOARD:
      return {
        ...state,
        myTasks: action.payload.tasks.filter(task => task.creator === action.payload.userId),
        tasksInProgress: action.payload.tasks.filter(task => task.withUser === action.payload.userId && !task.done),
        tasksDone: action.payload.tasks.filter(task => (task.withUser === action.payload.userId && task.done)),
      }
    default:
      return state
  }
};

export default tasksReducer;
