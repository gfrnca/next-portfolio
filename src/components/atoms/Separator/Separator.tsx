// General
import styled from "styled-components";

// Styles
const SeparatorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .separator {
    width: 2px;
    height: 80px;
    background: linear-gradient(360deg, #671fc3, #121214);
  }
`;

const Separator = () => {
  return (
    <SeparatorWrapper>
      <div className="separator" />
    </SeparatorWrapper>
  );
};

export default Separator;
