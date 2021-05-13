import styled from 'styled-components';
import avatar from '../../../assets/img/avatar.png';

const Avatar = styled.img`
  ${props => props}
  width: ${({ size }) => size || '2.5rem'};
  height: ${({ size }) => size || '2.5rem'};
  min-width: ${({ minSize }) => minSize};
  min-height: ${({ minSize }) => minSize};
  max-width: ${({ maxSize }) => maxSize};
  max-height: ${({ maxSize }) => maxSize};
  border-radius: ${props => props.theme.rounded[props.rounded] || props.theme.rounded.circle};
  border: ${props => props.border + props.theme.colors[props.borderColor]};
  object-fit: cover;
`;

Avatar.defaultProps = {
  alt: 'user avatar',
  src: avatar
};

export default Avatar;
