import styled from "styled-components";

export const MenuWrapper = styled.div`
  // Animations
  @keyframes open-menu {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  position: absolute;
  width: 100vw;
  height: 100vh;
  animation: open-menu;
  animation-duration: 1s;
  z-index: 99;
  transition: 0.5s all;
  background: red;
`;
