import React, { useContext } from 'react';
import sidebarContext from 'context/sidebar/sidebarContext';
import userContext from 'context/user/userContext';
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
    value: 'Crear cuenta'
  }

  return (
    <Template title="Sign up" cta={cta}>
      <Input label="Nombre de usuario"/>
      <Input label="Correo electronico"/>
      <Input label="Contraseña"/>
      <Input label="Repite tu contraseña"/>
    </Template>
  )
}

export default Index
