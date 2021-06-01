import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import userContext from 'context/user/userContext';

const Index = () => {
  const { user } = useContext(userContext);
  return (
    <Switch>
      {routes.map(({path, component: Component, isPrivate, ...props}, index) => (
        <Route key={index} exact path={path} {...props} render={props => (
          isPrivate && !user ? <Redirect to="/"/> : <Component {...props}/>
        )}/>
      ))}
    </Switch>
  )
};

export default Index;
