import React, { useContext } from 'react';
import { Container, Title, Close } from './styled';
import sidebarContext from '../../../context/sidebar/sidebarContext';

const Index = () => {
  const { showSidebar, content, handleHiddeSidebar } = useContext(sidebarContext);
  return (
    <Container showSidebar={showSidebar}>
      <Title>{content?.title || ''} <Close onClick={handleHiddeSidebar}/></Title>
    </Container>
  )
}

export default Index
