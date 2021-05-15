import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  height: 20px;
  border-radius: ${props => props.theme.rounded.xl};
  background-color: ${props => props.isActive ? props.theme.colors.success : props.theme.colors.gray};
  padding: 2px;
  cursor: pointer;
  transition: ${props => props.theme.transition.default};
  box-shadow: ${props => props.isActive && `0 0 4px ${props.theme.colors.success}`};
`;

export const Content = styled.div`
  width: 16px;
  height: 16px;
  transition: ${props => props.theme.transition.default};
  border-radius: ${props => props.theme.rounded.circle};
  background-color: white;
  transform: ${props => props.isActive ? 'translateX(20px)' : 0};
`;