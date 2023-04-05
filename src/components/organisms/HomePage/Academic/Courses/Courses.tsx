// CSS
import { coursesList } from "@/src/constants/courses";
import { CoursesWrapper } from "./Courses.styled";

const Courses = () => {
  return (
    <CoursesWrapper>
      <h2>
        Courses<span>.</span>
      </h2>

      <div className="courses">
        {coursesList.map((course) => (
          <div className="course">
            <div className="title">
              <span className={course.finished ? "complete" : ""} />
              {course.title}
            </div>
            <p className="about">{course.about}</p>
            <p className="description">{course.description}</p>
            <p className="length">{course.length}</p>
          </div>
        ))}
      </div>
    </CoursesWrapper>
  );
};

export default Courses;
