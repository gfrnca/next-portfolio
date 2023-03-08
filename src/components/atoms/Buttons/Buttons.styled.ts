import styled from "styled-components";

export const SubmitButton = styled.button `
    padding: 12px;
    border-radius: 4px;
    border: none;
    background: ${props => props.theme.colors.secondary.light}; 
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
        opacity: 0.9;
    }
`