import React, { useContext, useState } from 'react';
import tasksContext from '../../../../context/tasks/tasksContext';
import userContext from '../../../../context/user/userContext';
import { Text } from '../../../Atoms';
import { Tags } from '../../../Molecules';
import Template from '../Template';
import Chat from '../Chat';

const Index = () => {

  const { task } = useContext(tasksContext);
  const { user } = useContext(userContext);

  // TODO cambiar este useState por informacion real que llegue del backend 
  const [ assignMe, setAssignMe ] = useState(false);
  // TODO esta funcion deberia setear el id del usuario a la tarea, no un booleano
  const handleAssign = () => setAssignMe(true);

  const isChat = task?.withUser === user?.id;

  const cta = {
    handler: handleAssign,
    value: 'Assign me'
  }

  const secondaryButton = {
    to: '/backlog',
    value: 'Similar tasks'
  }

  // Con "isChat" deberia ser suficiente para mostrar el chat o la tarea, no deberia ser necesario pasarle user && assignMe
  return (
    <Template title={task?.title} cta={cta} secondaryButton={secondaryButton} isChat={isChat || user && assignMe} user={user} removeMargin={isChat || user && assignMe}>
      {isChat || user && assignMe ? (
        <Chat/>
      ) : (
        <>
          <Text color="darkGray">{task?.description}</Text>
          <Tags tags={task.tags}/>
        </>
      )}
    </Template>
  )
}

export default Index
