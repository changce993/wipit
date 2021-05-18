import styled from 'styled-components';

const Button = styled.button`
  ${props => props}
  font-weight: ${props => props.theme.fontWeight.bold};
  border-radius: ${props => props.theme.rounded[props.rounded] || props.theme.rounded.sm};
  transition: ${props => props.theme.transition.default};
  outline: none;
  cursor: ${props => !props.disable && 'pointer'};
  margin: ${props => props.margin};
  width: ${props => props.width || '160px'};
  max-width: 100%;
  height: 2.75rem;
`;

export const Primary = styled(Button)`
  border: none;
  color: white;
  background-color: ${props => props.disable ? props.theme.colors.lightPrimary : props.theme.colors.primary};

  :hover {
    color: white;
    background-color: ${props => props.disable ? props.theme.colors.lightPrimary : props.theme.colors.darkPrimary};
  }
`;

export const Secondary = styled(Button)`
  border: ${props => props.disable ? `1px solid ${props.theme.colors.lightPrimary}` : `1px solid ${props.theme.colors.primary}`};
  background-color: ${props => props.theme.colors[props.bg] || props.theme.colors.transparent};
  color: ${props => props.disable ? props.theme.colors.darkGray : props.theme.colors.lightBlack};

  :hover {
    border: ${props => props.disable ? `1px solid ${props.theme.colors.lightPrimary}` : `1px solid ${props.theme.colors.primary}`};
    color: ${props => props.disable ? props.theme.colors.darkGray : props.theme.colors.primary};
  }
`;

export const Light = styled(Button)`
  border: none;
  color: ${props => props.disable ? props.theme.colors.darkGray : props.theme.colors.lightBlack};
  background-color: ${props => props.theme.colors.bgGray};
  text-decoration: underline;

  :hover {
    color: ${props => props.disable ? props.theme.colors.darkGray : props.theme.colors.primary};
    background-color: ${props => props.theme.colors.bgGray};
  }
`;
