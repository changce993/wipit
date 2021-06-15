import styled from 'styled-components';

export const Grid = styled.section`
  display: grid;
  transition: ${props => props.theme.transition.default};
  grid-template-columns: ${props => props.showSidebar ? 'auto 320px' : '1fr'};
  height: calc(100vh - 80px);
  /* gap: 16px; */
`;

export const Container = styled.main`
  background-color: ${props => props.theme.colors.bgGray};
`;
