// CSS
import styled from "styled-components";

export const NavbarWrapper = styled.nav `
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 60px;

    .brand {
        letter-spacing: 4px;
        font-size: 30px;
        cursor: pointer;

        h1 span {
            color: ${props => props.theme.colors.primary}
        }
    }

    .nav-links {
        .active {
            color: white;
        }
    }

    .nav-links a {
        margin-right: 70px;
        color: #737380;

        &:last-child {
            margin-right: 0px;
        }
    }
`