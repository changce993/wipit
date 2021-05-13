import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.header`
  height: 5rem;
  display: grid;
  grid-template-columns: 320px auto;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background-color: ${props => props.sidebar && props.theme.colors.bgGray};
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.lightBlack};
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-family: ${props => props.theme.fontFamily.primary};
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 1rem;
`;
