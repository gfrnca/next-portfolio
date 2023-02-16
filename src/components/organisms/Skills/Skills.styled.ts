import styled from "styled-components";

export const SkillsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 34px;
    font-weight: 700;
    text-align: center;

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .skills {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;

    .skill {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 0.2s all;

      p {
        margin-top: 10px;
        font-weight: 500;

        span {
          color: #c2c2c2;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-decoration-color: ${(props) =>
            props.theme.colors.secondary.light};
          text-underline-offset: 20px;
        }
      }

      &:hover {
        scale: 1.02;

        p,
        span {
          color: #fff;
        }

        img {
          box-shadow: rgba(103, 31, 195, 0.1) 0px 0px 40px 10px,
            rgba(103, 31, 195, 0.1) 0px 20px 20px -10px;
          transition: 0.2s all;
        }
      }
    }
  }
`;
