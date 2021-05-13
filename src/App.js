import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Globalstyles, theme } from './theme';
import { ThemeProvider } from 'styled-components';

import Backlog from './pages/Backlog';
import Board from './pages/Board';
import Home from './pages/Home';
import { Sidebar } from './components/Organisms';

import SidebarState from './context/sidebar/sidebarState';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SidebarState>
          <Globalstyles/>
          <Switch>
            <Route exact path="/backlog" component={Backlog}/>
            <Route exact path="/board" component={Board}/>
            <Route exact path="/" component={Home}/>
          </Switch>
          <Sidebar/>
        </SidebarState>
      </ThemeProvider>
    </Router>
  )
};

export default App;
