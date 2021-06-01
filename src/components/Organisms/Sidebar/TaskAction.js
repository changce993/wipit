import { useContext } from 'react';
import { Div } from 'components/Atoms';
import { Action } from './styled';
import sidebarContext from 'context/sidebar/sidebarContext';

const Index = () => {
  const { SIDEBAR_OPTIONS, handleShowSidebar } = useContext(sidebarContext);
  return (
    <Div display="flex" gridGap="1rem">
      <Action color="success" bg="lightSuccess" onClick={() => handleShowSidebar(SIDEBAR_OPTIONS.rating)}>
        Done
      </Action>
      <Action color="info" bg="lightInfo">
        Repost
      </Action>
      <Action color="error" bg="lightError">
        Delete
      </Action>
    </Div>
  )
}

export default Index
