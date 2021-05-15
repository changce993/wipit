import { SWITCH_THEME } from '../../types';

export default (state, action) => {
  switch(action.type){
    case SWITCH_THEME:
      return {
        ...state,
        isDark: !state.isDark
      }
    default:
      return state
  }
}