import styled from "styled-components";

export const ProjectHandlerWrapper = styled.div`
  width: 800px;
  height: 400px;
  background: #222226;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
  position: absolute;
  padding: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;

  .button {
    margin-top: auto;
  }
`;
