import styled from 'styled-components';

export const Grid = styled.main`
  display: grid;
  transition: ${props => props.theme.transition.default};
  grid-template-columns: ${props => props.showSidebar ? '240px auto 320px' : '240px auto'};
  height: calc(100vh - 5rem);
`;

export const Content = styled.main`
  padding: 2rem;
  overflow-y: scroll;
`;