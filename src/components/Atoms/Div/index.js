import styled from 'styled-components';

export default styled.div`
  ${props => props}
  background-color: ${props => props.theme.colors[props.bg]};
  background-image: url(${props => props.bgImg});
  background-repeat: ${props => props.bgRepeat};
  background-size: ${props => props.bgSize};
  background-position: ${props => props.bgPos};
  transition: ${props => props.transition && props.theme.transition.default};
  border-radius: ${props => props.theme.rounded[props.rounded]};
  border: ${props => props.border + props.theme.colors[props.borderColor]};
  box-shadow: ${props => props.theme.shadow[props.shadow]};
`;
