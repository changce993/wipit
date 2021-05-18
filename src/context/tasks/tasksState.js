import { useReducer } from 'react';
import TasksContext from './tasksContext';
import tasksReducer from './tasksReducer';

import { GET_TASK, GET_TASKS, GET_MY_BOARD } from '../../types';

import tasksJSON from '../Mocks/tasks.json';

const TasksState = ({ children }) => {

  const initialState = {
    tasks: [],
    task: null,
    myTasks: [],
    tasksInProgress: [],
    tasksDone: [],
  };

  const [ state, dispatch ] = useReducer(tasksReducer, initialState);

  const getTasks = () => {
    dispatch({
      type: GET_TASKS,
      payload: tasksJSON
    })
  };

  const getTask = task => {
    dispatch({
      type: GET_TASK,
      payload: task
    })
  };

  const getMyBoard = userId => {
    dispatch({
      type: GET_MY_BOARD,
      payload: {
        userId,
        tasks: tasksJSON
      }
    })
  }

  const { tasks, task, myTasks, tasksInProgress, tasksDone } = state;

  return (
    <TasksContext.Provider value={{
      tasks,
      task,
      myTasks,
      tasksInProgress,
      tasksDone,
      getTasks,
      getTask,
      getMyBoard
    }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksState
