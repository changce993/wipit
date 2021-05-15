import React, { useContext } from 'react';
import { Container } from './styled';
import sidebarContext from '../../../context/sidebar/sidebarContext';

import Login from './Login';
import Signup from './Signup';
import EditProfile from './EditProfile';
import NewTask from './NewTask';
import Task from './Task';
import Rating from './Rating';

const Index = () => {

  const { showSidebar, content, CONSTANT } = useContext(sidebarContext);

  return (
    <Container showSidebar={showSidebar}>
      {content === CONSTANT.editProfile && <EditProfile/>}
      {content === CONSTANT.login && <Login/>}
      {content === CONSTANT.signup && <Signup/>}
      {content === CONSTANT.newTask && <NewTask/>}
      {content === CONSTANT.task && <Task/>}
      {content === CONSTANT.rating && <Rating/>}
    </Container>
  )
}

export default Index
