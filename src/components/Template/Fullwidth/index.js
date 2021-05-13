import React from 'react';
import { Navbar } from '../../Organisms';
import { Container } from './styled';

const index = ({ children }) => {
  return (
    <>
      <Navbar/>
      <Container>
        {children}
      </Container>
    </>
  )
}

export default index
