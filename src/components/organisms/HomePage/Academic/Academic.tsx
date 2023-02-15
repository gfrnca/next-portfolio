// General
import { useState } from "react";

// CSS
import { AcademicWrapper } from "./Academic.styled";

// Components
import Courses from "./Courses/Courses";
import Educations from "./Educations/Educations";

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

      {education ? <Educations /> : <Courses />}
    </AcademicWrapper>
  );
};

export default Academic;
