// CSS

import { Dispatch, SetStateAction } from "react";
import { ProjectHandlerWrapper } from "./ProjectHandler.styled";

interface ProjectHandlerProps {
  project: any;
  setShowProject: Dispatch<SetStateAction<boolean>>;
}

const ProjectHandler = ({ project, setShowProject }: ProjectHandlerProps) => {
  console.log(project);

  return (
    <ProjectHandlerWrapper>
      <div className="title">
        <h1>{project.name}</h1>
      </div>

      <div className="description">{project.description}</div>

      <div className="button">
        <button onClick={() => setShowProject(false)}>CLOSE</button>
      </div>
    </ProjectHandlerWrapper>
  );
};

export default ProjectHandler;
