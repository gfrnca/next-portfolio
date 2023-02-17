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
      width: 300px;
      height: 320px;
      cursor: pointer;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      transition: 0.2s all;
      display: flex;
      flex-direction: column;

      .label {
        display: flex;
        justify-content: center;
        align-items: center;

        .advice {
          width: fit-content;
          padding: 10px;
          color: black;
          font-weight: 600;
          border-radius: 4px;
          background: #fcd070;
          position: absolute;
        }
      }

      &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        scale: 1.01;
      }

      .project-thumbnail {
        width: 100%;
        height: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: -68px;
      }

      .project-content {
        padding: 10px;
        background: #0a0a0b;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        .identity {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;

          .title {
            font-size: 13px;
          }

          .subtitle {
            color: #5a5a65;
            font-size: 8px;
          }
        }

        .description {
          font-size: 14px;
          color: #b1b1b8;
          margin-bottom: 20px;
        }

        .skills {
          display: flex;
          flex-direction: row;
          gap: 10px;
          overflow: scroll;
          padding-bottom: 20px;

          ::-webkit-scrollbar-track {
            padding: 2px 0;
            background: transparent;
          }

          ::-webkit-scrollbar {
            width: 10px;
            height: 8px;
          }

          ::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: #4a4a53;
          }

          ::-webkit-scrollbar-corner {
            background: transparent;
          }

          .skill {
            height: 24px;
            width: fit-content;
            display: flex;
            align-items: center;
            padding: 8px;
            border-radius: 4px;
            background: #4a4a53;
            pointer-events: none;
            user-select: none;
          }
        }
      }
    }
  }
`;
