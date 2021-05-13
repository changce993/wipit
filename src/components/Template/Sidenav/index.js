import React from 'react';
import { Container, Content } from './styled';
import { Sidenav, Navbar } from '../../Organisms';

const index = ({ children }) => {
  return (
    <>
      <Navbar sidebar={true}/>
      <Container>
        <Sidenav/>

        <Content>
          {children}
        </Content>
      </Container>
    </>
  )
}

export default index
