import { useReducer } from 'react';
import TasksContext from './tasksContext';
import tasksReducer from './tasksReducer';

import { GET_TASK, GET_TASKS } from '../../types';

import tasksJSON from '../Mocks/tasks.json';

const TasksState = ({ children }) => {

  const initialState = {
    tasks: [],
    task: null
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

  const { tasks, task } = state;

  return (
    <TasksContext.Provider value={{
      tasks,
      task,
      getTasks,
      getTask
    }}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksState
