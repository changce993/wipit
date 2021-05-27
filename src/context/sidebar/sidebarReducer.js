import { SHOW_SIDEBAR, HIDDE_SIDEBAR } from '../../types';

const sidebarReducer = (state, action) => {
  switch(action.type){
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: true,
        content: action.payload
      }
    case HIDDE_SIDEBAR:
      return {
        ...state,
        showSidebar: false,
        content: {}
      }
    default:
      return state
  }
};

export default sidebarReducer