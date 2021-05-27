import React, { useContext, useEffect } from 'react';
import { Container } from './styled';
import { Task } from '../../Molecules';
import { useResponsive } from '../../../hooks';
import tasksContext from '../../../context/tasks/tasksContext';

const Index = () => {
  const { md, xl, xxl, xxxl } = useResponsive();
  const { tasks, getTasks } = useContext(tasksContext);

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <Container repeat={md ? 2 : xl ? 3 : xxl ? 4 : xxxl ? 5 : 6}>
      {tasks.map(task => <Task transition fullBorder task={task} key={task.id}/>)}
    </Container>
  )
}

export default Index
