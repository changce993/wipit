import React, { useContext } from 'react';
import { Text } from 'components/Atoms';
import Tags from '../Tags';
import { Task, Title } from './styled';
import sidebarContext from 'context/sidebar/sidebarContext';
import tasksContext from 'context/tasks/tasksContext';

const Index = ({ task, ...props }) => {
  const { title, description, tags } = task;
  const { handleShowSidebar, SIDEBAR_OPTIONS } = useContext(sidebarContext);
  const { getTask } = useContext(tasksContext);

  const handleTask = () => {
    handleShowSidebar(SIDEBAR_OPTIONS.task)
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
