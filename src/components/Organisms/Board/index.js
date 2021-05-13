import React from 'react';
import Board from './Board';
import { Container } from './styled';

const index = () => {
  const description = 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.';
  const tags = ['Ask a quick question', 'Frontend', 'Javascript', '45 min', 'Medium']
  const tasks = [
    {id: 0, title: 'titulo 0', description, tags},
    {id: 1, title: 'titulo 1', description, tags},
    {id: 2, title: 'titulo 2', description, tags},
    {id: 3, title: 'titulo 3', description, tags},
    {id: 4, title: 'titulo 4', description, tags},
    {id: 5, title: 'titulo 5', description, tags},
    {id: 6, title: 'titulo 6', description, tags},
  ];

  return (
    <Container>
      <Board tasks={tasks.slice(2, 5)} title="My tasks"/>
      <Board tasks={tasks} title="In progress"/>
      <Board title="Done"/>
    </Container>
  )
}

export default index
