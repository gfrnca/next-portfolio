import { AcademicWrapper } from "./Academic.styled";

const Academic = () => {
  return (
    <AcademicWrapper>
      <h2>
        Education<span>.</span>
      </h2>

      <div className="formations">
        <div className="formation">
          <div className="title">
            <span /> ETEC Prof. Horácio Augusto da Silveira
          </div>
          <p className="course">
            Integrated technical education in{" "}
            <strong>software development</strong>
          </p>
          <p className="description">
            Place where I got involved with several projects including most
            language scopes in a possible web, desktop or mobile application. I
            also participated in the preparation of a{" "}
            <strong>TCC (Final Work/ Final Paper)</strong>, where I used part of
            my knowledge in Web Development in frameworks such as Angular.
          </p>
        </div>
      </div>
    </AcademicWrapper>
  );
};

export default Academic;
