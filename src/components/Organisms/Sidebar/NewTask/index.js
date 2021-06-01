import { Div } from 'components/Atoms';
import { Input, Textarea, Dropdown } from 'components/Molecules';
import Template from '../Template';

const Index = () => {

  const cta = {
    handler: null,
    value: 'Post a task'
  }

  return (
    <Template title="Nueva tarea" cta={cta}>
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
    </Template>
  )
}

export default Index
