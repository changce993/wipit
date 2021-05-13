import styled from 'styled-components';

const Logo = styled.a`
  font-size: ${props => props.theme.fontSize.display1};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeight.semibold};
  font-family: ${props => props.theme.fontFamily.primary};
  text-decoration: none;
`;

Logo.defaultProps = {
  href: '/',
  children: 'WIPIT'
}

export default Logo;
