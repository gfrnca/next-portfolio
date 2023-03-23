import styled from "styled-components";

export const SubmitButton = styled.button`
  padding: 12px;
  border-radius: 4px;
  border: none;
  background: ${(props) => props.theme.colors.secondary.light};
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s all;

  &:disabled {
    background: transparent;
    border: 1px solid #323238;
    color: #323238;
  }

  &:hover {
    opacity: 0.5;
  }
`;
