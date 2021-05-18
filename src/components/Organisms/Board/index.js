import React, { useContext, useEffect } from 'react';
import Board from './Board';
import { Container } from './styled';
import tasksContext from '../../../context/tasks/tasksContext';
import userContext from '../../../context/user/userContext';

const Index = () => {
  const { myTasks, tasksInProgress, tasksDone, getMyBoard } = useContext(tasksContext);
  const { user } = useContext(userContext);

  useEffect(() => getMyBoard(user.id), []);

  return (
    <Container>
      <Board title="My tasks" tasks={myTasks}/>
      <Board title="In progress" tasks={tasksInProgress}/>
      <Board title="Done" tasks={tasksDone}/>
    </Container>
  )
}

export default Index
