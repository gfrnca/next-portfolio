// Components
import { Container } from "@/src/styles/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProjectsPageWrapper } from "./ProjectsPage.styled";

// Icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
          <div className="project"></div>
        </div>
      </Container>
    </ProjectsPageWrapper>
  );
};

export default ProjectsPage;
