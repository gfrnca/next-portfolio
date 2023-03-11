import styled from "styled-components";

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextAreaControl = styled.textarea`
  padding: 13px;
  width: 100%;
  color: white;
  border: none;
  border-radius: 5px;
  background: #0a0a0b;
  transition: 0.2s all ease;
  font-size: 16px;
  min-height: 200px;
  resize: none;
  font-family: Inter;

  &.filled {
    outline: 1px solid ${(props) => props.theme.colors.secondary.light};
  }

  &:focus {
    padding: 15px;
    outline: 1px solid ${(props) => props.theme.colors.secondary.light};
  }
`;
