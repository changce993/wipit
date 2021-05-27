import React, { useContext } from 'react';
import { Logo, Avatar, Link } from '../../Atoms';
import { SwitchTheme } from '../../Molecules';
import { Navbar, Nav, NavigationContainer } from './styled';
import Navigation from './Navigation';
import sidebarContext from '../../../context/sidebar/sidebarContext';
import userContext from '../../../context/user/userContext';

const Index = ({ sidebar }) => {

  const { handleShowSidebar, CONSTANT } = useContext(sidebarContext);
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
              <Avatar src={user?.avatar} onClick={() => handleShowSidebar(CONSTANT.editProfile)}/>
              <Link as="p" color="primary" onClick={() => handleShowSidebar(CONSTANT.newTask)}>Post a task</Link>
            </NavigationContainer>

            <Navigation/>
          </>
        ) : (
          <NavigationContainer marginLeft="auto">
            <Link as="p" onClick={() => handleShowSidebar(CONSTANT.login)}>Login</Link>
            <Link as="p" onClick={() => handleShowSidebar(CONSTANT.signup)}>Register</Link>
            <SwitchTheme/>
          </NavigationContainer>
        )}
        
      </Nav>
    </Navbar>
  )
}

export default Index
