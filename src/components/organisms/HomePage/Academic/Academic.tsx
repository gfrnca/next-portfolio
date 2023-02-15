// General
import { useState } from "react";

// CSS
import { AcademicWrapper } from "./Academic.styled";

const Academic = () => {
  const [education, setEducation] = useState(true);

  return (
    <AcademicWrapper>
      <div className="selector">
        <button
          onClick={() => setEducation(true)}
          className={education ? "academic-button active" : "academic-button"}
        >
          <p>Education</p>
        </button>
        <button
          onClick={() => setEducation(false)}
          className={!education ? "academic-button active" : "academic-button"}
        >
          <p>Courses</p>
        </button>
      </div>
      <h2>
        Education<span>.</span>
      </h2>

      <div className="educations">
        {/* ETEC */}
        <div className="education">
          <div className="title">
            <span className="complete" /> ETEC Prof. Horácio Augusto da Silveira
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
          <p className="length">Feb. 2020 - Dec. 2022</p>
        </div>

        {/* FIAP */}
        <div className="education">
          <div className="title">
            <span /> FIAP
          </div>
          <p className="course">
            Degree in <strong>Analysis and Development of Systems</strong>
          </p>
          <p className="description">Just started it! (:</p>
          <p className="length">Feb. 2023 - Today</p>
        </div>
      </div>
    </AcademicWrapper>
  );
};

export default Academic;
