import { useContext } from 'react';
import sidebarContext from 'context/sidebar/sidebarContext';

const useSidebar = () => {
  const { SIDEBAR_OPTIONS, showSidebar, content, handleShowSidebar, handleHiddeSidebar } = useContext(sidebarContext);
  return { SIDEBAR_OPTIONS, showSidebar, content, handleShowSidebar, handleHiddeSidebar }
}

export default useSidebar
