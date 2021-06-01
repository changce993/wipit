import { useReducer } from 'react';
import DarkModeContext from './darkModeContext';
import darkModeReducer from './darkModeReducer';

import { SWITCH_THEME } from 'types';

const DarkModeState = ({ children }) => {

  const initialState = {
    isDark: false
  };

  const [ state, dispatch ] = useReducer(darkModeReducer, initialState);

  const handleSwitchTheme = () => dispatch({ type: SWITCH_THEME });

  const { isDark } = state;

  return (
    <DarkModeContext.Provider value={{
      isDark,
      handleSwitchTheme
    }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeState
