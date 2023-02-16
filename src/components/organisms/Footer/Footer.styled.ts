import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 300px;
  background: #000;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;

  .background {
    height: 350px;
    margin-top: -50px;
    overflow: hidden;

    img {
      margin-top: -50px;
      transform: rotate(50deg);
      user-select: none;
      pointer-events: none;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .links {
    ul {
      display: flex;
      flex-direction: column;

      a {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 20px;
        color: #fff;
        background-image: linear-gradient(
          to right,
          #8257e5,
          #8257e5 50%,
          #000 50%
        );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        padding: 5px 0;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: #fff;
        transition: all 0.3s ease-in-out;
      }

      a:before {
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

      a:hover {
        -webkit-text-fill-color: transparent;
        background-position: 0;
      }

      a:hover::before {
        width: 100%;
      }

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }

  .right-container {
    width: 100%;
    height: 100%;
  }
`;
