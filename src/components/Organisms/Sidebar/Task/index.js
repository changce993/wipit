import React, { useContext } from 'react';
import tasksContext from '../../../../context/tasks/tasksContext';
import userContext from '../../../../context/user/userContext';
import { Button, Div, Text, Link } from '../../../Atoms';
import { Tags } from '../../../Molecules';
import Title from '../Title';
import Chat from '../Chat';

const Index = () => {

  const { task } = useContext(tasksContext);
  const { user } = useContext(userContext);
  return (
    <>
      <Title title={task?.title}/>
      {task?.withUser === user?.id ? (
        <Chat/>
      ) : (
        <>
          <Div flex="1">
            <Div margin="1rem 0" overflowY="scroll">
              <Text color="darkGray" marginBottom="1rem">{task?.description}</Text>
              <Tags tags={task.tags}/>
            </Div>
          </Div>
          <Div>
            <Button width="100%">Assign me</Button>
            <Link to="/backlog" display="block" width="fit-content" margin="16px auto 0">Similar tasks</Link>
          </Div>
        </>
      )}
    </>
  )
}

export default Index
