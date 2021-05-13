import React from 'react';
import { NavLink, NavigationContainer } from './styled';

const Navigation = () => {
  const links = [
    {name: 'Backlog', url: '/backlog'},
    {name: 'Board', url: '/board'},
  ];
  return (
    <NavigationContainer>
      {links.map(({name, url}) => (
        <NavLink to={url} isActive={window.location.pathname === url}>{name}</NavLink>
      ))}
    </NavigationContainer>
  )
}

export default Navigation;
