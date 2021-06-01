import React, { useContext } from 'react';
import { Logo, Avatar, Link } from 'components/Atoms';
import { SwitchTheme } from 'components/Molecules';
import { Navbar, Nav, NavigationContainer } from './styled';
import Navigation from './Navigation';
import sidebarContext from 'context/sidebar/sidebarContext';
import userContext from 'context/user/userContext';

const Index = ({ sidebar }) => {

  const { handleShowSidebar, SIDEBAR_OPTIONS } = useContext(sidebarContext);
  const { user } = useContext(userContext);

  return (
    <Navbar>
      <Nav sidebar={sidebar}>
        <Logo/>
      </Nav>

      <Nav>
        {user ? (
          <>
            <NavigationContainer>
              <Avatar src={user?.avatar} onClick={() => handleShowSidebar(SIDEBAR_OPTIONS.editProfile)}/>
              <Link as="p" color="primary" onClick={() => handleShowSidebar(SIDEBAR_OPTIONS.newTask)}>Post a task</Link>
            </NavigationContainer>

            <Navigation/>
          </>
        ) : (
          <NavigationContainer marginLeft="auto">
            <Link as="p" onClick={() => handleShowSidebar(SIDEBAR_OPTIONS.login)}>Login</Link>
            <Link as="p" onClick={() => handleShowSidebar(SIDEBAR_OPTIONS.signup)}>Register</Link>
            <SwitchTheme/>
          </NavigationContainer>
        )}
        
      </Nav>
    </Navbar>
  )
}

export default Index
