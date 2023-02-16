import styled from "styled-components";

const background = require("../../../../../public/assets/background.svg");

export const HeroWrapper = styled.div`
  // Animations
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }

  // Hero

  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;

  .blobs {
    overflow: hidden;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }

  .blob {
    position: absolute;
    z-index: -1;
    opacity: 0.5;

    &.one {
      width: 400px;
      left: -350px;
    }

    &.two {
      width: 400px;
      right: -350px;
    }

    &.three {
      width: 500px;
      top: 800px;
      left: 200px;
    }
  }

  p {
    font-size: 20px;
    line-height: 1.5;
    color: #c2c2c2;
    max-width: 800px;
    margin-bottom: 40px;
  }

  .hero {
    display: flex;
    flex-direction: column;

    p {
      font-size: 28px;

      span {
        color: ${(props) => props.theme.colors.secondary.light};
      }
    }

    .title {
      display: flex;
      align-items: center;
      flex-direction: row;

      img {
        margin-bottom: 13px;
        margin-right: 15px;
        animation-name: wave-animation;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
      }
    }
  }

  .quotes {
    color: ${(props) => props.theme.colors.primary};
    font-size: 200px;
    position: absolute;
    margin-top: 60px;
    margin-left: -30px;
    opacity: 0.5;
    z-index: -1;
    user-select: none;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .Typewriter {
    margin: 30px 0px 40px 0px;

    span {
      font-size: 34px;
      font-weight: 600;

      strong {
        text-decoration: underline;
        text-underline-offset: 10px;
        text-decoration-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text};
      }

      span {
        color: ${(props) => props.theme.colors.secondary.light};
      }

      @media only screen and (max-width: 600px) {
        font-size: 25px;
      }
    }
  }
`;
