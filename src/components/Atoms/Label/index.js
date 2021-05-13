import styled from 'styled-components';

export default styled.p`
  color: ${props => props.error ? props.theme.colors.error : props.theme.colors.primary};
  font-weight: ${props => props.message ? props.theme.fontWeight.regular : props.theme.fontWeight.semibold};
  font-size: ${props => props.theme.fontSize.label};
  font-family: ${props => props.theme.fontFamily.primary};
  margin: 0 4px;
`;
