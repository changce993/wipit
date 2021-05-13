import styled from 'styled-components';

export default styled.p`
  ${props => props}
  color: ${props => props.theme.colors[props.color] || props.theme.colors.lightBlack};
  font-weight: ${props => props.theme.fontWeight[props.weight] || props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSize[props.size] || props.theme.fontSize.text};
  font-family: ${props => props.theme.fontFamily[props.family] || props.theme.fontFamily.primary};
`;