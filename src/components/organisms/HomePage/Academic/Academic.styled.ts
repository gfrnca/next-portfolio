import styled from "styled-components";

export const AcademicWrapper = styled.div`
  width: 100%;
  height: 1000px;
  background: ${(props) => props.theme.colors.supportBackground};
  display: flex;
  align-items: center;
  flex-direction: column;

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
`;
