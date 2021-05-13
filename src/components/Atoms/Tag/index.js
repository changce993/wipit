import styled from 'styled-components';

export default styled.p`
  font-size: ${props => props.theme.fontSize.caption};
  color: ${props => props.theme.colors.primary};
  padding: .5rem;
  background-color: ${props => props.theme.colors.lightPrimary};
  border-radius: ${props => props.theme.rounded.sm};
  font-family: ${props => props.theme.fontFamily.primary};
`;