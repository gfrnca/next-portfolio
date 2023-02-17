import styled from "styled-components";

export const ProjectsPageWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
  }

  .projects-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

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
  }

  .projects-content {
    width: 100%;
    display: flex;

    .project {
      width: 400px;
      height: 250px;
      background: blue;
    }
  }
`;
