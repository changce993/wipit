import React, { useContext } from 'react';
import { Text } from '../../Atoms';
import Tags from '../Tags';
import { Task, Title } from './styled';
import sidebarContext from '../../../context/sidebar/sidebarContext';
import tasksContext from '../../../context/tasks/tasksContext';

const Index = ({ task, ...props }) => {
  const { title, description, tags } = task;
  const { handleShowSidebar, CONSTANT } = useContext(sidebarContext);
  const { getTask } = useContext(tasksContext);

  const handleTask = () => {
    handleShowSidebar(CONSTANT.task)
    getTask(task);
  };

  return (
    <Task {...props} onClick={handleTask}>
      <Title>{title}</Title>
      <Text color="darkGray">{description}</Text>
      <Tags tags={tags}/>
    </Task>
  )
}

export default Index
