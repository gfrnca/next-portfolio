// CSS
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 60px;

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
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }

  .nav-links {
    .active {
      color: white;
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
