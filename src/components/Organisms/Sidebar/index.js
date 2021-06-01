import React, { useContext } from 'react';
import { Container } from './styled';
import sidebarContext from 'context/sidebar/sidebarContext';

import Login from './Login';
import Signup from './Signup';
import EditProfile from './EditProfile';
import NewTask from './NewTask';
import Task from './Task';
import Rating from './Rating';
import UserProfile from './UserProfile';

const Index = () => {

  const { showSidebar, content, SIDEBAR_OPTIONS } = useContext(sidebarContext);

  return (
    <Container showSidebar={showSidebar}>
      {content === SIDEBAR_OPTIONS.editProfile && <EditProfile/>}
      {content === SIDEBAR_OPTIONS.login && <Login/>}
      {content === SIDEBAR_OPTIONS.signup && <Signup/>}
      {content === SIDEBAR_OPTIONS.newTask && <NewTask/>}
      {content === SIDEBAR_OPTIONS.task && <Task/>}
      {content === SIDEBAR_OPTIONS.rating && <Rating/>}
      {content === SIDEBAR_OPTIONS.userProfile && <UserProfile/>}
    </Container>
  )
}

export default Index
