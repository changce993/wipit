import styled from 'styled-components';
import { Div } from 'components/Atoms';

export const Chat = styled.section`
  flex:1;
  background-color: ${props => props.theme.colors.bgGray};
  /* width: calc(100% + 2.5rem); */
  /* margin-left: -2.25rem; */
  overflow-y: scroll;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
`;

export const Message = styled(Div)`
  padding: .5rem;
  font-size: ${props => props.theme.fontSize.label};
  line-height: 18px;
  border-radius: ${props => props.theme.rounded.sm};
  background-color: ${props => props.theme.colors.white};
  max-width: 90%;
  width: fit-content;
  margin-left: ${props => props.me && 'auto'};
`;