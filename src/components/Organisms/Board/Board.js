import React from 'react';
import { Task } from '../../Molecules';
import { Section, Title, Tasks } from './styled';

const Board = ({ title, tasks = [] }) => {
  return (
    <Section>
      <Title>{title} {tasks.length > 0 && <Tasks>{tasks.length}</Tasks>}</Title>
      {tasks.map(task => <Task task={task} key={task.id}/>)}
    </Section>
  )
}

export default Board
