import styled from 'styled-components';

export default styled.label`
  display: ${props => props.display || 'inline-block'};
  color: ${props => props.error ? props.theme.colors.error : props.theme.colors.lightBlack};
  font-weight: ${props => props.message ? props.theme.fontWeight.regular : props.theme.fontWeight.medium};
  font-size: ${props => props.theme.fontSize.label};
  font-family: ${props => props.theme.fontFamily.primary};
  margin: ${props => props.margin || '.25rem 0'};
`;
