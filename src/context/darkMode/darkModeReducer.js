import { SWITCH_THEME } from '../../types';

const darkModeReducer = (state, action) => {
  switch(action.type){
    case SWITCH_THEME:
      return {
        ...state,
        isDark: !state.isDark
      }
    default:
      return state
  }
};

export default darkModeReducer;
