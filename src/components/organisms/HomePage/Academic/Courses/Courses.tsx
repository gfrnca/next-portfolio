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
            <span /> Udemy
          </div>
          <p className="about">
            React do Zero a Maestria (c/ hooks, router, API, Projetos)
          </p>
          <p className="description">
            Course where I am consolidating my React skills.
          </p>
          <p className="length">Jan. 2023 - Today</p>
        </div>
      </div>
    </CoursesWrapper>
  );
};

export default Courses;
