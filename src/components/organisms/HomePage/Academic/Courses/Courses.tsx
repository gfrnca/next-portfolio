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
            <span className="complete" /> Alura
          </div>
          <p className="about">JavaScript para Web: Crie páginas dinâmicas</p>
          <p className="description">
            I learned about optimized code that goes through all the buttons,
            reducing code repetition and increasing the reusability and
            maintainability of this code, among other things such as playing
            audio.
          </p>
          <p className="length">2023</p>
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
