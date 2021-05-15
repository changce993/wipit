import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  font-size: ${props => props.theme.fontSize.display1};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-family: ${props => props.theme.fontFamily.primary};
  text-decoration: none;
`;

Logo.defaultProps = {
  to: '/',
  children: 'WIPIT'
}

export default Logo;
