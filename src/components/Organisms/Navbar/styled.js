import styled from 'styled-components';

export const Navbar = styled.header`
  height: 5rem;
  display: grid;
  grid-template-columns: 240px auto;
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

export const NavigationContainer = styled.div`
  ${props => props}
  display: flex;
  align-items: center;
  grid-gap: 1rem;
`;
