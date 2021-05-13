import styled from 'styled-components';

export const Task = styled.div`
  padding: 1rem;
  border-bottom: ${props => !props.fullBorder && `1px solid ${props.theme.colors.lightGray}`};
  border-radius: ${props => props.fullBorder && props.theme.rounded.sm};
  border: ${props => props.fullBorder && `1px solid ${props.theme.colors.lightGray}`};
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  transition: ${props => props.transition && props.theme.transition.default};
  cursor: pointer;

  :hover{
    box-shadow: ${props => props.fullBorder && props.theme.shadow[1]};
  }
`;

export const Title = styled.h3`
  font-size: ${props => props.theme.fontSize.header};
  font-weight: ${props => props.theme.fontWeight.medium};
  font-family: ${props => props.theme.fontFamily.primary};
`;

export const Tags = styled.div`
  display: flex;
  grid-gap: .5rem;
  flex-wrap: wrap;
`;