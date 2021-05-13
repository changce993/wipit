import { useReducer } from 'react';
import SidebarContext from './sidebarContext';
import sidebarReducer from './sidebarReducer';

import { SHOW_SIDEBAR, HIDDE_SIDEBAR } from '../../types';

const SidebarState = ({ children }) => {

  const initialState = {
    showSidebar: false,
    content: {}
  };

  const [ state, dispatch ] = useReducer(sidebarReducer, initialState);

  const handleShowSidebar = e => {
    dispatch({
      type: SHOW_SIDEBAR,
      payload: e
    })
  };

  const handleHiddeSidebar = () => dispatch({ type: HIDDE_SIDEBAR });

  const { showSidebar, content } = state;

  return (
    <SidebarContext.Provider value={{
      showSidebar,
      content,
      handleShowSidebar,
      handleHiddeSidebar,
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarState
