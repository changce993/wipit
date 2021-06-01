import styled from 'styled-components';
import { ReactComponent as StarIcon } from 'assets/icons/star.svg';

export const Container = styled.div`
  ${props => props}
  width: ${props => props.width || 'fit-content'};
  margin: ${props => props.margin || '0 auto'};
`;

export const Star = styled(StarIcon)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  
  path {
    fill: ${props => props.theme.colors[props.fill]};
    transition: ${props => props.theme.transition.default};
  }
`;