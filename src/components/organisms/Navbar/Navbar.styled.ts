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
        font-family: PlanetKosmos;
        letter-spacing: 2px;
        font-size: 25px;
        cursor: pointer;

        h1 span {
            color: ${props => props.theme.colors.primary}
        }
    }

    .nav-links a {
        margin-right: 24px;

        &:last-child {
            margin-right: 0px;
        }
    }
`