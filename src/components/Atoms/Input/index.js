import styled from 'styled-components';

const Input = styled.input`
    ${props => props}
    outline: none;
    border: ${props => props.border + props.theme.colors[props.borderColor] || props.error ? `1px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.lightGray}`};
    background-color: ${props => props.theme.colors[props.bg] || props.theme.colors.white};
    padding: ${props => props.padding || '.75rem 1rem'};
    border-radius: ${props => props.theme.rounded[props.rounded] || props.theme.rounded.sm};
    width: ${props => props.width || '100%'};
    height: 2.75rem;
    max-width: '100%';
    color: ${props => props.theme.colors.lightBlack};
    transition: ${props => props.theme.transition.default};
    font-family: ${props => props.theme.fontFamily.primary};
    font-weight: ${props => props.theme.fontWeight.regular};
    caret-color: ${props => props.theme.colors.primary};

    :hover {
        background-color: ${props => props.theme.colors[props.hoverBg]};
        border: ${props => props.border + props.theme.colors[props.hoverBorderColor] || props.error ? `1px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.gray}`};
    }

    :focus {
        border: ${props => props.border + props.theme.colors[props.borderColor] || props.error ? `1px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.gray}`};
    }
`;

Input.defaultProps = {
    type: 'text',
    autocomplete: 'off'
}

export default Input;
