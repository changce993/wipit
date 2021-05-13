import styled from 'styled-components';

const Input = styled.input`
    ${props => props}
    outline: none;
    border: ${props => props.border + props.theme.colors[props.borderColor] || props.error ? `1px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.lightPrimary}`};
    background-color: ${props => props.theme.colors[props.bg] || props.theme.colors.white};
    padding: ${props => props.padding || '.75rem 1rem'};
    border-radius: ${props => props.theme.rounded[props.rounded] || props.theme.rounded.sm};
    width: ${props => props.width || '100%'};
    height: 3rem;
    max-width: '100%';
    transition: ${props => props.theme.transition.default};

    :hover {
        background-color: ${props => props.theme.colors[props.hoverBg]};
        border: ${props => props.border + props.theme.colors[props.hoverBorderColor] || props.error ? `1px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.primary}`};
    }

    :focus {
        border: ${props => `1px solid ${props.theme.colors.primary}`};
        border: ${props => props.border + props.theme.colors[props.borderColor] || props.error ? `1px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.primary}`};
    }
`;

Input.defaultProps = {
    type: 'text',
    autocomplete: 'off'
}

export default Input;
