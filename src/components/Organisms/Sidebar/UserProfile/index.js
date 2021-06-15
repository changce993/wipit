import { Avatar, Text } from 'components/Atoms';
import Template from '../Template';
import { MockUser } from 'Mocks';
import { capitalize } from 'utils/functions';

const Index = () => {
  const { avatar, firstname, lastname, username, biography, profession } = MockUser;

  return (
    <Template title={capitalize(username)}>
      <Avatar size="7rem" margin="0 auto" src={avatar}/>
      <Text textAlign="center" size="header" weight="medium">{firstname} {lastname}</Text>
      <Text textAlign="center">{profession}</Text>
      <Text>{biography}</Text>
      <Text weight="semibold">Done: <Text as="span">12</Text></Text>
      <Text weight="semibold">In progress: <Text as="span">5</Text></Text>
      <Text weight="semibold">Tasks: <Text as="span">7</Text></Text>
      <Text weight="semibold">Rating: <Text as="span">4.2</Text></Text>
    </Template>
  )
}

export default Index
