import React, { useContext } from 'react';
import { Grid, Content } from './styled';
import { Sidenav, Navbar, Sidebar } from 'components/Organisms';
import sidebarContext from 'context/sidebar/sidebarContext';

const Index = ({ children }) => {
  const { showSidebar } = useContext(sidebarContext);
  // TODO Unificar el ancho del color del Sidenav y el Navbar
  return (
    <>
      <Navbar sidebar={true}/>
      <Grid showSidebar={showSidebar}>
        <Sidenav/>

        <Content>
          {children}
        </Content>

        <Sidebar/>
      </Grid>
    </>
  )
}

export default Index
