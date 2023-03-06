import styled from "styled-components";

export const ProjectHandlerWrapper = styled.div`
  // Animations
  @keyframes bottom-to-top {
    100% {
      transform: translate(-50%, -10%);
      opacity: 0.99;
    }
  }

  background: #222226;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
  position: absolute;
  padding: 50px;
  left: 50%;
  transform: translate(-50%, -100%);
  opacity: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  animation: bottom-to-top 0.4s ease forwards;

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    background: none;
    border: none;
    color: #63636d;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      font-size: 22px;
      color: white;
    }
  }

  .description {
    margin-top: 20px;
  }

  .buttons {
    display: flex;
    gap: 60px;
    margin-top: 60px;
    margin-bottom: 30px;

    button {
      padding: 8px 20px;
      border: none;
      border-radius: 4px;
      font-size: 18px;
      background: #42424a;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s all;

      svg {
        margin-right: 8px;
        font-size: 18px;
      }

      &:hover {
        background: #63636d;
        transform: scale(1.05);
        transform-origin: 50% 50%;
      }
    }
  }

  .skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: auto;

    .skill {
      height: 30px;
      width: fit-content;
      white-space: nowrap;
      display: flex;
      align-items: center;
      padding: 8px;
      font-size: 14px;
      border-radius: 4px;
      background: #4a4a53;
      pointer-events: none;
      user-select: none;
      transition: 0.2s all;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 360px;
  }
`;
