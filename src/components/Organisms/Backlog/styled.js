import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(${props => props.repeat}, 1fr);
  grid-gap: 1rem;
`;