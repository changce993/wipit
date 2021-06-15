import React, { useContext } from 'react';
import { Grid, Container } from './styled';
import { Navbar, Sidebar } from 'components/Organisms';
import sidebarContext from 'context/sidebar/sidebarContext';

const Index = ({ children }) => {
  const { showSidebar } = useContext(sidebarContext);
  return (
    <>
      <Navbar/>
      <Grid showSidebar={showSidebar}>
        <Container>
          {children}
        </Container>
        <Sidebar/>
      </Grid>
    </>
  )
}

export default Index
