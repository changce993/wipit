import React, { useContext } from 'react';
import sidebarContext from '../../../../context/sidebar/sidebarContext';
import userContext from '../../../../context/user/userContext';
import { Form, Button, Div, Link } from '../../../Atoms';
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
      <Div flex="1">
        <Title title="Login"/>
        <Form margin="1rem 0" overflowY="scroll">
          <Input label="Nombre de usuario"/>
          <Input label="Contraseña"/>
          <Link as="p" color="info" width="fit-content" margin="0 auto" cursor="pointer">¿Olvidaste tu contraseña?</Link>
        </Form>
      </Div>
      <Button onClick={loginFn} width="100%">Iniciar sesion</Button>
    </>
  )
}

export default Index
