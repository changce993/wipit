import React, { useContext, useEffect } from 'react';
import Board from './Board';
import { Container } from './styled';
import tasksContext from '../../../context/tasks/tasksContext';

const Index = () => {
  const { tasks, getTasks } = useContext(tasksContext);

  useEffect(() => getTasks(), []);

  return (
    <Container>
      <Board title="My tasks" tasks={tasks.slice(1, 2)}/>
      <Board title="In progress" tasks={tasks.filter(task => task.withUser === 3)}/>
      <Board title="Done" tasks={tasks.slice(3, -1)}/>
    </Container>
  )
}

export default Index
