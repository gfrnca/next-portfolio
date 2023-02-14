import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  // Fonts
  @font-face {
    font-family: PlanetKosmos;
    src: url('/fonts/planetkosmos.woff') format('woff');
    font-style: normal;
    font-display: swap;
  }

  // Global Styles
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: ${props => props.theme.colors.background};
    background-color: #000;
    background-repeat: no-repeat;
    min-height: 100vh;
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`

export const Container = styled.div `
  padding: 0px 12vw;
`