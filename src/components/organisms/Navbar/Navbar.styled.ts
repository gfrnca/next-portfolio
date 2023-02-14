// CSS
import styled from "styled-components";

export const NavbarWrapper = styled.nav `
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;

    .container .brand {
        font-family: PlanetKosmos;
        letter-spacing: 2px;
        font-size: 25px;
        cursor: pointer;

        h1 span {
            color: ${props => props.theme.colors.primary}
        }
    }
`