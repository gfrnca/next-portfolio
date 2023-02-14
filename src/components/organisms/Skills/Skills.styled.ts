import styled from "styled-components";

export const SkillsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;

  h2 {
    font-size: 30px;
    font-weight: 100;
    color: ${(props) => props.theme.colors.primary};
  }
`;
