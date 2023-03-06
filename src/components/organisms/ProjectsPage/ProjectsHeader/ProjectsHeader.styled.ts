import styled from "styled-components";

export const ProjectsHeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
  gap: 20px;

  .search-bar {
    display: flex;
    align-items: center;

    .icon {
      margin-right: 10px;
      color: #757575;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    input {
      background: #0a0a0b;
      border: none;
      outline: none;
      border-radius: 8px;
      padding: 10px;
      flex: 1;
      display: flex;
      color: white;
      font-family: Inter;
    }
  }
`;
