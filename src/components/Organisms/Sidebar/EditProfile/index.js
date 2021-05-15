import { useContext } from 'react';
import { Form, Button, Div, Avatar } from '../../../Atoms';
import { Input, Textarea } from '../../../Molecules';
import Title from '../Title';
import userContext from '../../../../context/user/userContext';

const Index = () => {

  const { user } = useContext(userContext);

  return (
    <>
      <Div>
        <Title title="Editar perfil"/>
        <Form margin="1rem 0" maxHeight="calc(100vh - 16rem)" overflowY="scroll">
          <Avatar size="7rem" margin="0 auto" src={user.avatar}/>
          <Input label="What's your name"/>
          <Input label="What's your job position"/>
          <Textarea label="Tell us more about yourself"/>
          <Input label="Linkedin"/>
          <Input label="Github"/>
          <Input label="Portafolio"/>
        </Form>
      </Div>
      <Button width="100%">Guardar cambios</Button>
    </>
  )
}

export default Index
