import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import userContext from '../context/user/userContext';

export default () => {
  const { user } = useContext(userContext);
  return (
    <Switch>
      {routes.map(({path, component: Component, isPrivate, ...props}) => (
        <Route exact path={path} {...props} render={props => (
          isPrivate && !user ? <Redirect to="/"/> : <Component {...props}/>
        )}/>
      ))}
    </Switch>
  )
};
