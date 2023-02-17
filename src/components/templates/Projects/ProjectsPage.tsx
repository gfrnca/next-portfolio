// Components
import { Container } from "@/src/styles/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectsPageWrapper } from "./ProjectsPage.styled";

// Icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Assets
import camel from "../../../../public/assets/projects/camel.png";

// Constants
import { projects } from "@/src/contants";

const ProjectsPage = () => {
  return (
    <ProjectsPageWrapper>
      <Container>
        <div className="projects-header">
          <h1 className="title">Projects</h1>
          <div className="search-bar">
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <input type="text" placeholder="Search technologies" />
          </div>
        </div>

        <div className="projects-content">
          {projects.map((project) => (
            <div className="project">
              <div className="label">
                {!project.finished ? (
                  <div className="advice">Not finished</div>
                ) : null}
              </div>
              <div
                className="project-thumbnail"
                style={{
                  backgroundImage: `url(/assets/projects/${project.name}.png)`,
                }}
              ></div>
              <div className="project-content">
                <div className="identity">
                  <div className="title">
                    <h1>{project.title}</h1>
                  </div>
                  <div className="subtitle">
                    <h2>{project.subtitle}</h2>
                  </div>
                </div>
                <div className="description">
                  <p>{project.description}</p>
                </div>

                <div className="skills">
                  {project.skills.map((skill) => (
                    <div className="skill">
                      <p>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ProjectsPageWrapper>
  );
};

export default ProjectsPage;
