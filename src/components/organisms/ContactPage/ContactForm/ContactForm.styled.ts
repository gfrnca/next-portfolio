import styled from "styled-components";

export const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 540px;
  gap: 40px;

  .or {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    h3 {
      font-size: 17px;
      color: #3a3a41;
    }

    p {
      color: #73737f;

      span {
        color: #babac0;
      }
    }
  }
`;
