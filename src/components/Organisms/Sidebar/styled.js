import styled from 'styled-components';
import { Text } from '../../Atoms';
import { ReactComponent as Cross } from '../../../assets/icons/cross.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrowLeft.svg';

export const Container = styled.section`
  padding: 1.25rem;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow[1]};
  border-radius: ${props => props.theme.rounded.md};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 5rem;
  height: calc(100vh - 7rem);
  width: 20rem;
  max-width: 100%;

  visibility: ${props => props.showSidebar ? 'show' : 'hidden'};
  opacity: ${props => props.showSidebar ? 1 : 0};
  right: 2rem;
  transition: ${props => props.theme.transition.default};
  transform: scale(${props => props.showSidebar ? 1 : 1.1});
`;

export const Title = styled(Text)`
  font-size: ${props => props.theme.fontSize.header};
  font-weight: ${props => props.theme.fontWeight.medium};
  display: flex;
  grid-gap: ${props => props.gap || '1rem'};
  align-items: flex-start;
  justify-content: ${props => props.justify || 'space-between'};
  user-select: none;
`;

export const Close = styled(Cross)`
  transition: ${props => props.theme.transition.default};
  fill: ${props => props.theme.colors.black};
  cursor: pointer;
  min-width: 24px;
  min-height: 24px;
  transform: translateY(-1px);

  :hover{
    fill: ${props => props.theme.colors.primary};
  }
`;

export const ArrowLeft = styled(Close)``;
ArrowLeft.defaultProps = { as: Arrow };