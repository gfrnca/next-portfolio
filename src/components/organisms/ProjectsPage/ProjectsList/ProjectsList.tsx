// General
import { useState } from "react";

//CSS
import { ProjectsListWrapper } from "./ProjectList.styled";

// Interface
import { Project } from "@/src/components/templates/ProjectsPage/projects";
import ProjectHandler from "../ProjectHandler/ProjectHandler";

interface ProjectListProps {
  projects: Project[];
}

const ProjectsList = ({ projects }: ProjectListProps) => {
  const [project, setProject] = useState([]);
  const [showProject, setShowProject] = useState(false);

  const projectInfoHandler = (project: any) => {
    console.log(project);
    setShowProject(true);

    return setProject(project);
  };

  return (
    <ProjectsListWrapper>
      {showProject ? (
        <ProjectHandler setShowProject={setShowProject} project={project} />
      ) : null}

      <ul>
        {projects.map((project) => (
          <li onClick={() => projectInfoHandler(project)} key={project.name}>
            {!project.finished ? (
              <div className="label">
                <div className="advice">Not finished</div>
              </div>
            ) : null}

            <div
              className="project-thumbnail"
              style={{
                backgroundImage: `url(/assets/projects/${project.name.toLowerCase()}.png)`,
              }}
            />
            <div className="project-content">
              <div className="identity">
                <div className="title">{project.name}</div>
                <div className="subtitle">{project.subtitle}</div>
              </div>
              <div className="description">{project.description}</div>
              <div className="skills">
                {project.languages.map((skill) => (
                  <div className="skill">{skill}</div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ProjectsListWrapper>
  );
};

export default ProjectsList;
