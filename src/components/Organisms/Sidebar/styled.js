import styled from 'styled-components';
import { Text } from '../../Atoms';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg';

export const Container = styled.section`
  padding: 2rem;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow[1]};
  border-radius: ${props => props.theme.rounded.sm};
  position: fixed;
  top: 6rem;
  height: calc(100vh - 8rem);
  width: 25rem;
  max-width: 100%;

  visibility: ${props => props.showSidebar ? 'show' : 'hidden'};
  opacity: ${props => props.showSidebar ? 1 : 0};
  right: ${props => props.showSidebar ? '2rem' : 0};
  transition: ${props => props.theme.transition.default};
`;

export const Title = styled(Text)`
  font-size: ${props => props.theme.fontSize.subtitle};
  font-weight: ${props => props.theme.fontWeight.semibold};
  display: flex;
  grid-gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const Close = styled(Cross)`
  transition: ${props => props.theme.transition.default};
  cursor: pointer;

  :hover{
    fill: ${props => props.theme.colors.primary};
  }
`;