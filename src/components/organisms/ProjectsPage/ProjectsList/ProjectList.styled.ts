import styled from "styled-components";

export const ProjectsListWrapper = styled.div`
  cursor: pointer;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: 0.2s all;
  flex-direction: column;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    gap: 120px;

    li {
      list-style: none;
      &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        scale: 1.01;
      }
      width: 300px;
      height: 320px;
      cursor: pointer;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      transition: 0.2s all;
      display: flex;
      flex-direction: column;
    }
  }

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

  .project-thumbnail {
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -68px;
    min-height: 150px;
  }

  .project-content {
    padding: 15px;
    min-height: 237px;
    background: #0a0a0b;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    flex-direction: column;
    display: flex;
    flex: 0.1;

    .identity {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      margin-bottom: 14px;

      .title {
        font-size: 20px;
        font-weight: 600;
      }

      .subtitle {
        color: #5a5a65;
        font-size: 12px;
      }
    }

    .description {
      font-size: 14px;
      color: #b1b1b8;
      padding-bottom: 10px;
    }

    .skills {
      margin-top: auto;
      display: flex;
      flex-direction: row;
      gap: 10px;
      overflow: scroll;
      padding-bottom: 20px;
      cursor: default !important;

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
        height: 30px;
        width: fit-content;
        white-space: nowrap;
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        background: #4a4a53;
        pointer-events: none;
        user-select: none;

        p {
          white-space: nowrap;
          display: inline-block;
        }
      }
    }
  }
`;
