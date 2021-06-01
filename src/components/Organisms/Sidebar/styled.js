import styled from 'styled-components';
import { Text } from 'components/Atoms';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import { ReactComponent as Arrow } from 'assets/icons/arrowLeft.svg';

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
  border: ${props => `1px solid ${props.theme.colors.lightGray}`};

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

export const Body = styled.section`
  ${props => props}
  width: ${props => props.removeMargin && 'calc(100% + 2.5rem)'};
  margin: ${props => props.removeMargin ? '1rem 0 1rem -1.25rem' : '1rem 0'};
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  flex: 1;
  overflow-y: scroll;
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