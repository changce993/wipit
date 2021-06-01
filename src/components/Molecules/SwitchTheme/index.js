import React, { useContext } from 'react';
import { Container, Content } from './styled';
import darkModeContext from 'context/darkMode/darkModeContext';

const Index = ({ ...props }) => {
  const { isDark, handleSwitchTheme } = useContext(darkModeContext);
  return (
    <Container {...props} isActive={isDark} onClick={handleSwitchTheme}>
      <Content isActive={isDark}/>
    </Container>
  )
}

export default Index
