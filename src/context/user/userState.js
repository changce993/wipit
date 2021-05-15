import { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';

import { LOGIN, LOGOUT } from '../../types';

const UserState = ({ children }) => {

  const userMock = {
    id: 3,
    avatar: 'https://data.whicdn.com/images/320553053/original.jpg',
    username: 'itsme',
    profession: 'Frontend developer',
    firstname: 'Kakashi',
    lastname: 'Hatake',
    biography: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    rating: {
      value: 4.9,
      comments: []
    },
    social: {
      linkedin: 'https://www.linkedin.com/in/changcer/',
      github: 'https://github.com/changce993',
      website: ''
    },
    tasks: {
      myTasks: [],
      inProgress: [],
      donde: []
    },
    lang: 'en', // TODO evaluar si es factible guardar esta información
    darkMode: true // TODO evaluar si es factible guardar esta información
  };

  const initialState = {
    user: null
  };

  const [ state, dispatch ] = useReducer(userReducer, initialState);

  const handleLogin = () => {
    // Se supone que aca hace una consulta y si esta todo ok reotrnaria el usuario que pasa por payload
    dispatch({
      type: LOGIN,
      payload: userMock
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
