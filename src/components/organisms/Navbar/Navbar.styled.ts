// CSS
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 90px;
  margin-bottom: 60px;
  overflow: hidden;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  .brand {
    letter-spacing: 2px;
    font-weight: 100;
    font-size: 30px;
    cursor: pointer;

    h1 {
      strong {
        -webkit-text-stroke: 1px #ededed;

        color: ${(props) => props.theme.colors.background};
      }

      .brackets {
        color: ${(props) => props.theme.colors.primary};
      }

      span {
        color: ${(props) => props.theme.colors.secondary.light};
      }
    }

    @media only screen and (max-width: 768px) {
      h1 {
        font-size: 40px;
      }
    }
  }

  .nav-links {
    .active {
      color: white;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }

    @media only screen and (max-width: 960px) {
      display: none;
    }

    a {
      margin-right: 70px;
      font-size: 20px;
      color: #737380;

      &:last-child {
        margin-right: 0px;
      }
    }
  }

  .nav-menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;

    .menu {
      width: 50px;
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 15px 10px;
      justify-content: space-between;

      .stripe {
        width: 30px;
        height: 1px;
        background: white;
        transition: 0.2s;

        &.open {
          transform: rotate(120deg);
        }
      }
    }

    @media only screen and (min-width: 960px) {
      display: none;
    }
  }
`;
