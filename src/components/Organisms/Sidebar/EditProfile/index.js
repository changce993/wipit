import { useContext } from 'react';
import { Avatar } from '../../../Atoms';
import { Input, Textarea } from '../../../Molecules';
import Template from '../Template';
import userContext from '../../../../context/user/userContext';

const Index = () => {

  const { user } = useContext(userContext);

  const cta = {
    handler: null,
    value: 'Guardar Cambios'
  }

  return (
    <Template title="Editar perfil" cta={cta}>
      <Avatar size="7rem" margin="0 auto" src={user.avatar}/>
      <Input label="What's your name"/>
      <Input label="What's your job position"/>
      <Textarea label="Tell us more about yourself"/>
      <Input label="Linkedin"/>
      <Input label="Github"/>
      <Input label="Portafolio"/>
    </Template>
  )
}

export default Index
