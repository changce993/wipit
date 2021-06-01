import { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';

import { LOGIN, LOGOUT } from 'types';

import userJSON from 'Mocks/user.json';

const UserState = ({ children }) => {

  const initialState = {
    user: null
  };

  const [ state, dispatch ] = useReducer(userReducer, initialState);

  const handleLogin = () => {
    // Se supone que aca hace una consulta y si esta todo ok reotrnaria el usuario que pasa por payload
    dispatch({
      type: LOGIN,
      payload: userJSON
    })
  };

  const handleLogout = () => dispatch({ type: LOGOUT });

  const { user } = state;

  return (
    <userContext.Provider value={{
      user,
      handleLogin,
      handleLogout
    }}>
      {children}
    </userContext.Provider>
  )
}

export default UserState
