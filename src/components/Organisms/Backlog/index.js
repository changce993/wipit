import React from 'react';
import { Container } from './styled';
import { Task } from '../../Molecules';
import tasks from '../../Mocks/tasks';
import { useResponsive } from '../../../hooks';

const Index = () => {
  const { md, xl, xxl, xxxl } = useResponsive();
  return (
    <Container repeat={md ? 1 : xl ? 2 : xxl ? 3 : xxxl ? 4 : 5}>
      {tasks.map(task => <Task transition fullBorder task={task} key={task.id}/>)}
    </Container>
  )
}

export default Index
