import React from 'react';
import { NavigationContainer } from './styled';
import { SwitchTheme } from 'components/Molecules';
import { Link } from 'components/Atoms';

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
