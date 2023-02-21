import styled from "styled-components";

export const MenuWrapper = styled.div`
  // Animations
  @keyframes open-menu {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }

  position: fixed;
  width: 100vw;
  height: 100vh;
  animation: open-menu;
  animation-duration: 1s;
  z-index: 99;
  transition: 0.5s all;
  background: ${(props) => props.theme.colors.background};

  .menu-title {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;

    h2 {
      span {
        text-decoration: underline;
        text-underline-offset: 8px;
        text-decoration-thickness: 1px;
        text-decoration-color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;

    li {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 20px;
      color: #555;
      background-image: linear-gradient(
        to right,
        #8257e5,
        #8257e5 50%,
        #555 50%
      );
      background-size: 200% 100%;
      background-position: -100%;
      display: inline-block;
      padding: 5px 0;
      position: relative;
      -webkit-background-clip: text;
      -webkit-text-fill-color: #555;
      transition: all 0.3s ease-in-out;

      &.active {
        color: #fff;
        -webkit-text-fill-color: #fff;
      }

      li:before {
        content: "";
        background: #8257e5;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        transition: all 0.3s ease-in-out;
      }

      li:hover {
        -webkit-text-fill-color: transparent;
        background-position: 0;
      }

      li:hover::before {
        width: 100%;
      }

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;
