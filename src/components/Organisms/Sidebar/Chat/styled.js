import styled from 'styled-components';

export const Chat = styled.section`
  flex:1;
  background-color: ${props => props.theme.colors.bgGray};
  width: calc(100% + 2.5rem);
  margin: 1rem 0 1rem -1.25rem;
  padding: 1rem;
`;

export const Action = styled.div`
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color]};
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 4rem;
  border-radius: ${props => props.theme.rounded.sm};
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily.primary};
  font-size: ${props => props.theme.fontSize.tiny};
  font-weight: ${props => props.theme.fontWeight.medium};
  transition: ${props => props.theme.transition.default};

  :hover{
    transform: translateY(-2px);
  }
`;