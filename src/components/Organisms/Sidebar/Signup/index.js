import React, { useContext } from 'react';
import sidebarContext from '../../../../context/sidebar/sidebarContext';
import userContext from '../../../../context/user/userContext';
import { Form, Button, Div } from '../../../Atoms';
import { Input } from '../../../Molecules';
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
        <Title title="Sign up"/>
        <Form margin="1rem 0" maxHeight="calc(100vh - 16rem)" overflowY="scroll">
          <Input label="Nombre de usuario"/>
          <Input label="Correo electronico"/>
          <Input label="Contraseña"/>
          <Input label="Repite tu contraseña"/>
        </Form>
      </Div>
      <Button onClick={loginFn} width="100%">Crear cuenta</Button>
    </>
  )
}

export default Index
