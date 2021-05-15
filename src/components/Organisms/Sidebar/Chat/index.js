import { useContext } from 'react';
import { Div, Text } from '../../../Atoms';
import { Input } from '../../../Molecules';
import { Chat, Action } from './styled';
import sidebarContext from '../../../../context/sidebar/sidebarContext';

const Index = () => {
  const { CONSTANT, handleShowSidebar } = useContext(sidebarContext);
  return (
    <>
        <Chat>
          <Text>Chat</Text>
        </Chat>

        <Input placeholder="write a message"/>

        <Div display="flex" gridGap="1rem" marginTop="1rem">
          <Action color="success" bg="lightSuccess" onClick={() => handleShowSidebar(CONSTANT.rating)}>
            Done
          </Action>
          <Action color="info" bg="lightInfo">
            Repost
          </Action>
          <Action color="error" bg="lightError">
            Delete
          </Action>
        </Div>
      </>
  )
}

export default Index
