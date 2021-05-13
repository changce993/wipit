import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 320px auto;
  height: calc(100vh - 5rem);
`;

export const Content = styled.main`
  padding: 2rem;
  overflow-y: scroll;
`;