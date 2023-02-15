import styled from "styled-components";

export const AcademicWrapper = styled.div`
  width: 100%;
  height: 1000px;
  background: ${(props) => props.theme.colors.supportBackground};
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 40px;
    margin-bottom: 60px;

    span {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  .selector {
    width: 500px;
    height: 60px;
    background: #131314;
    margin-bottom: 50px;
    border-radius: 8px;
    padding: 5px;
    display: flex;
    gap: 10px;

    .academic-button {
      border-radius: 8px;
      flex: 1;
      width: 250px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background: unset;
      border: none;

      &.active {
        background: #050505;

        p {
          color: white !important;
        }
      }

      p {
        color: #c2c2c2;
        font-size: 20px;
      }
    }
  }

  .educations {
    .education {
      padding: 0px 300px;
      margin-bottom: 70px;

      :last-child {
        margin-bottom: 0px;
      }

      .title {
        display: flex;
        align-items: center;
        font-size: 24px;
        margin-bottom: 4px;
        font-weight: 800;

        span {
          border-radius: 100%;
          border: 1px solid ${(props) => props.theme.colors.secondary};
          height: 11px;
          width: 11px;
          display: inline-block;
          margin-right: 15px;

          &.complete {
            background: ${(props) => props.theme.colors.secondary};
            box-shadow: rgba(4, 211, 97, 0.4) 0px 0px 10px 2px,
              rgba(4, 211, 97, 0.4) 0px 30px 20px -30px;

            ::after {
              content: "";
              width: 2px;
              height: 200px;
              background: linear-gradient(180deg, #04d361, #09090a);
              z-index: -1;
              display: block;
              margin-left: 3px;
            }
          }
        }
      }

      .course {
        margin-left: 25px;
        color: #c2c2c2;
        margin-bottom: 20px;
        font-size: 18px;
      }

      .description {
        font-size: 21px;
        line-height: 1.5;
        color: #c2c2c2;
        margin-left: 25px;
        margin-bottom: 24px;
      }

      .length {
        color: #c2c2c2;
        font-size: 15px;
        margin-left: 25px;
      }
    }
  }
`;
