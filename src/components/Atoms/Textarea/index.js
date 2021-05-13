import styled from 'styled-components';

const Textarea = styled.textarea`
    ${props => props}
    outline: none;
    border: ${props => props.border + props.theme.colors[props.borderColor] || props.error ? `1px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.lightPrimary}`};
    background-color: ${props => props.theme.colors[props.bg] || props.theme.colors.white};
    padding: ${props => props.padding || '12px 16px'};
    border-radius: ${props => props.theme.rounded[props.rounded] || props.theme.rounded.sm};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '80px'};
    max-width: '100%';
    transition: ${props => props.theme.transition.default};
    font-family: ${props => props.theme.fontFamily.primary};
    resize: none;


    :hover {
        background-color: ${props => props.theme.colors[props.hoverBg]};
        border: ${props => props.border + props.theme.colors[props.hoverBorderColor] || props.error ? `1px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.primary}`};
    }

    :focus {
        border: ${props => props.border + props.theme.colors[props.borderColor] || props.error ? `1px solid ${props.theme.colors.error}` : `1px solid ${props.theme.colors.primary}`};
    }
`;

export default Textarea;
