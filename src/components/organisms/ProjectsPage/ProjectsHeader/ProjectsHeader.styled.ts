import styled from "styled-components";

export const ProjectsHeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
  gap: 20px;

  .title {
  }

  .search-bar {
    .icon {
      margin-right: 10px;
      color: #757575;
    }

    input {
      background: #0a0a0b;
      border: none;
      outline: none;
      border-radius: 8px;
      padding: 10px;
      color: white;
      font-family: Inter;
    }
  }
`;
