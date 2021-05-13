import React, { useContext } from 'react';
import { Logo, Avatar, Text } from '../../Atoms';
import { Navbar, Nav, NavigationContainer } from './styled';
import Navigation from './Navigation';
import sidebarContext from '../../../context/sidebar/sidebarContext';

const Index = ({ sidebar }) => {

  const { handleShowSidebar } = useContext(sidebarContext);

  const taskSidebar = { title: 'Post a new task' };
  const profileSidebar = { title: 'Edit your profile' };

  return (
    <Navbar>
      <Nav sidebar={sidebar}>
        <Logo/>
      </Nav>

      <Nav>
        <NavigationContainer>
          <Avatar
            cursor="pointer"
            onClick={() => handleShowSidebar(profileSidebar)}
          />
          <Text
            color="primary"
            weight="semibold"
            cursor="pointer"
            onClick={() => handleShowSidebar(taskSidebar)}
          >
            Post a task
          </Text>
        </NavigationContainer>

        <Navigation/>
      </Nav>
    </Navbar>
  )
}

export default Index
