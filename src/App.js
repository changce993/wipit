import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Globalstyles, theme, dark } from './theme';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next'

import Backlog from './pages/Backlog';
import Board from './pages/Board';
import Home from './pages/Home';
import { Sidebar } from './components/Organisms';

import darkModeContext from './context/darkMode/darkModeContext';
import userContext from './context/user/userContext';

const App = () => {
  const { isDark } = useContext(darkModeContext);
  const { user } = useContext(userContext);
  const { i18n } = useTranslation();
  
  useEffect(() => i18n.changeLanguage(user?.lang || 'es'), [user]);

  return (
    <Router>
      <ThemeProvider theme={ isDark ? dark : theme }>
        <Globalstyles/>
        <Switch>
          <Route exact path="/backlog" component={Backlog}/>
          <Route exact path="/board" component={Board}/>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Sidebar/>
      </ThemeProvider>
    </Router>
  )
};

export default App;
