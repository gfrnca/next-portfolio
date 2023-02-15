// CSS
import { CoursesWrapper } from "./Courses.styled";

const Courses = () => {
  return (
    <CoursesWrapper>
      <h2>
        Courses<span>.</span>
      </h2>

      <div className="courses">
        {/* ETEC */}
        <div className="course">
          <div className="title">
            <span className="complete" /> ETEC Prof. Horácio Augusto da Silveira
          </div>
          <p className="about">
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
        <div className="course">
          <div className="title">
            <span /> FIAP
          </div>
          <p className="about">
            Degree in <strong>Analysis and Development of Systems</strong>
          </p>
          <p className="description">Just started it! (:</p>
          <p className="length">Feb. 2023 - Today</p>
        </div>
      </div>
    </CoursesWrapper>
  );
};

export default Courses;
