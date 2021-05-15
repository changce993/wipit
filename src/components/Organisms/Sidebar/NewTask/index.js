import React, { useContext } from 'react';
import sidebarContext from '../../../../context/sidebar/sidebarContext';
import userContext from '../../../../context/user/userContext';
import { Form, Button, Div } from '../../../Atoms';
import { Input, Textarea, Dropdown } from '../../../Molecules';
import Title from '../Title';
import { useHistory } from 'react-router-dom';

const Index = () => {

  const history = useHistory();

  const { handleHiddeSidebar } = useContext(sidebarContext);
  const { handleLogin } = useContext(userContext);

  const loginFn = () => {
    handleLogin();
    handleHiddeSidebar();
    history.push('/backlog');
  };

  return (
    <>
      <Div>
        <Title title="Nueva tarea"/>
        <Form margin="1rem 0" maxHeight="calc(100vh - 16rem)" overflowY="scroll">
          <Input label="¿What's this task about?"/>
          <Textarea label="Describe some details about the task"/>
          <Dropdown label="Purpouse" width="100%"/>

          <Div display="grid" gridTemplateColumns="1fr 1fr" alignItems="center" gridGap="1rem" width="100%">
            <Dropdown label="Area" width="100%"/>
            <Dropdown label="Time" width="100%"/>
          </Div>

          <Div display="grid" gridTemplateColumns="1fr 1fr" alignItems="center" gridGap="1rem" width="100%">
            <Dropdown label="Language" width="100%"/>
            <Dropdown label="Dificult" width="100%"/>
          </Div>
        </Form>
      </Div>
      <Button onClick={loginFn} width="100%">Post task</Button>
    </>
  )
}

export default Index
