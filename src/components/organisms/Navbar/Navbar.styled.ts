// CSS
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 90px;
  margin-bottom: 60px;

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
  }

  .nav-links a {
    margin-right: 70px;
    font-size: 20px;
    color: #737380;

    &:last-child {
      margin-right: 0px;
    }
  }
`;
