import React from 'react';
import { NavigationContainer } from './styled';
import { SwitchTheme } from '../../Molecules';
import { Link } from '../../Atoms';

const Navigation = () => {
  const links = [
    {name: 'Backlog', url: '/backlog'},
    {name: 'Board', url: '/board'},
  ];
  return (
    <NavigationContainer>
      {links.map(({name, url}, index) => <Link key={index} to={url} isActive={window.location.pathname === url}>{name}</Link>)}
      <SwitchTheme/>
    </NavigationContainer>
  )
}

export default Navigation;
