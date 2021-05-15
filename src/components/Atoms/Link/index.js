import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  ${props => props}
  text-decoration: none;
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors[props.color] || props.theme.colors.lightBlack};
  font-weight: ${props => props.theme.fontWeight.medium};
  font-family: ${props => props.theme.fontFamily.primary};
  cursor: ${props => props.cursor || 'pointer'};
`;