import React, { useContext } from 'react';
import { Text, Tag } from '../../Atoms';
import { Task, Title, Tags } from './styled';
import sidebarContext from '../../../context/sidebar/sidebarContext';

const Index = ({ task, ...props }) => {
  const { title, description, tags } = task;
  const { handleShowSidebar } = useContext(sidebarContext);
  const taskSidebar = { title }
  return (
    <Task {...props} onClick={() => handleShowSidebar(taskSidebar)}>
      <Title>{title}</Title>
      <Text color="darkGray">{description}</Text>
      <Tags>
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </Tags>
    </Task>
  )
}

export default Index
