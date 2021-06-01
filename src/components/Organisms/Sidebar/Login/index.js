import React, { useContext } from 'react';
import sidebarContext from 'context/sidebar/sidebarContext';
import userContext from 'context/user/userContext';
import { Link } from 'components/Atoms';
import { Input } from 'components/Molecules';
import Template from '../Template';
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

  const cta = {
    handler: loginFn,
    value: 'Iniciar sesion'
  }

  return (
    <Template title="Login" cta={cta}>
      <Input label="Nombre de usuario"/>
      <Input label="Contraseña"/>
      <Link as="p" color="info" width="fit-content" margin="0 auto" cursor="pointer">¿Olvidaste tu contraseña?</Link>
    </Template>
  )
}

export default Index
