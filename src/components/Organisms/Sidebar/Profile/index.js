import { useContext } from 'react';
import { Avatar, Text } from 'components/Atoms';
import Template from '../Template';
import userContext from 'context/user/userContext';
import { useSidebar } from 'hooks';

const Index = () => {

  const { handleShowSidebar, SIDEBAR_OPTIONS } = useSidebar();
  const { user, handleLogout } = useContext(userContext);
  const { username, avatar } = user;

  return (
    <Template title={username}>
      <Avatar size="7rem" margin="0 auto" src={avatar}/>
      <Text onClick={() => handleShowSidebar(SIDEBAR_OPTIONS.editProfile)} cursor="pointer">Editar perfil</Text>
      <Text onClick={handleLogout} cursor="pointer">Cerrar sesión</Text>
    </Template>
  )
}

export default Index
