// General
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS
import { ProjectHandlerWrapper } from "./ProjectHandler.styled";

// Font Awesome
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faX,
} from "@fortawesome/free-solid-svg-icons";

interface ProjectHandlerProps {
  project: any;
  setShowProject: Dispatch<SetStateAction<boolean>>;
}

const ProjectHandler = ({ project, setShowProject }: ProjectHandlerProps) => {
  console.log(project);

  return (
    <ProjectHandlerWrapper>
      <button className="close" onClick={() => setShowProject(false)}>
        <FontAwesomeIcon icon={faX} />
      </button>
      <div className="title">
        <h1>{project.name}</h1>
      </div>

      <div className="description">{project.description}</div>

      <div className="buttons">
        <button>
          <FontAwesomeIcon icon={faGithub} />
          Github
        </button>
        <button>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          Deploy
        </button>
      </div>

      <div className="skills">
        {project.languages.map((skill: any) => (
          <div className="skill">{skill}</div>
        ))}
      </div>
    </ProjectHandlerWrapper>
  );
};

export default ProjectHandler;
