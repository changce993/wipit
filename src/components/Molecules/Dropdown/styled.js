import styled from 'styled-components';

export const Container = styled.div`
  height: 48px; // change to rem
  background: ${props => props.theme.colors.white};
  width: ${({ width }) => width || '160px'};
  max-width: ${({ maxW }) => maxW || '100%'};
  min-width: ${({ minW }) => minW};
  padding: 0 16px;
  border: ${props => `1px solid ${props.theme.colors.lightPrimary}`};
  border-radius: ${props => props.theme.rounded.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: ${props => props.theme.transition.default};
  position: relative;
  margin: 4px 0;

  g{
    transition: ${props => props.theme.transition.default};
  }

  :hover{
    border: ${props => `1px solid ${props.theme.colors.primary}`};

    g{
      fill: ${props => props.theme.colors.primary};
    }
  }
`;

export const Options = styled.div`
  width: ${({ width }) => width || '160px'};
  position: absolute;
  display: flex;
  flex-direction: column;
  grid-gap: 4px;
  box-shadow: ${props => props.theme.shadow[1]};
  background-color: ${props => props.theme.colors.white};
  margin-top: 8px;
  max-height: 96px;
  overflow-y: scroll;
  border-radius: ${props => props.theme.rounded.sm};
  padding: 8px;
  z-index: 1;
`;