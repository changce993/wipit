import React from 'react';
import { Avatar, Text } from 'components/Atoms';
import { Container } from './styled';

const index = ({ user }) => {
  return (
    <Container>
      <Avatar cursor="default" size="3rem" src={user?.avatar}/>
      <div>
        <Text>{user.firstname} {user?.lastname}</Text>
        <Text>{user?.profession}</Text>
      </div>
    </Container>
  )
}

export default index
