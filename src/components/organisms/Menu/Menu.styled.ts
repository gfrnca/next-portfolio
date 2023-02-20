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
`;
