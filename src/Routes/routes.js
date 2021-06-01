import Home from 'pages/Home';
import Board from 'pages/Board';
import Backlog from 'pages/Backlog';
import NotFound from 'pages/NotFound';

const routes = [
  {
    path: '/',
    component: Home,
    isPrivate: false
  },
  {
    path: '/board',
    component: Board,
    isPrivate: true
  },
  {
    path: '/backlog',
    component: Backlog,
    isPrivate: true
  },

  // Este "NotFound" debe estar siempre al final de la lista :)
  {
    component: NotFound,
  }
];

export default routes;
