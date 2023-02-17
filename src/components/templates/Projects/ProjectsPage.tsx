// Components
import { Container } from "@/src/styles/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectsPageWrapper } from "./ProjectsPage.styled";

// Icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Assets
import camel from "../../../../public/assets/projects/camel.png";

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
          <div className="project">
            <div className="label">
              <div className="advice">Not finished</div>
            </div>
            <div
              className="project-thumbnail"
              style={{ backgroundImage: `url(/assets/projects/camel.png)` }}
            ></div>
            <div className="project-content">
              <div className="identity">
                <div className="title">
                  <h1></h1>Camel
                </div>
                <div className="subtitle">
                  <h2>Mini-blog</h2>
                </div>
              </div>
              <div className="description">
                <p>
                  A mini-blog containing functions like authentication, posts
                  and friends.
                </p>
              </div>

              <div className="skills">
                <div className="skill">React</div>
                <div className="skill">Typescript</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ProjectsPageWrapper>
  );
};

export default ProjectsPage;
