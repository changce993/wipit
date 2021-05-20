import { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Globalstyles, theme, dark } from './theme';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next'

import { Sidebar } from './components/Organisms';

import darkModeContext from './context/darkMode/darkModeContext';
import userContext from './context/user/userContext';

import Routes from './Routes';

const App = () => {
  const { isDark } = useContext(darkModeContext);
  const { user } = useContext(userContext);
  const { i18n } = useTranslation();
  
  useEffect(() => i18n.changeLanguage(user?.lang || 'es'), [user]);

  return (
    <Router>
      <ThemeProvider theme={ isDark ? dark : theme }>
        <Globalstyles/>
        <Routes/>
        <Sidebar/>
      </ThemeProvider>
    </Router>
  )
};

export default App;
