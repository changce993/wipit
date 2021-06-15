import { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Globalstyles, theme, dark } from 'theme';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next'

import darkModeContext from 'context/darkMode/darkModeContext';
import userContext from 'context/user/userContext';

import socket from 'components/Organisms/Socket';
import Routes from 'Routes';

import 'pages/Home/Socket/Socket.css';

const App = () => {
  const { isDark } = useContext(darkModeContext);
  const { user } = useContext(userContext);
  const { i18n } = useTranslation();
  
  useEffect(() => {
    i18n.changeLanguage(user?.lang || 'es');
    // eslint-disable-next-line
  }, [user]);

  return (
    <Router>
      <ThemeProvider theme={ isDark ? dark : theme }>
        <Globalstyles/>
        <Routes/>
      </ThemeProvider>
    </Router>
  )
};

export default App;
