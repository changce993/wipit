import { GET_TASK, GET_TASKS } from '../../types';

export default (state, action) => {
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
    default:
      return state
  }
}