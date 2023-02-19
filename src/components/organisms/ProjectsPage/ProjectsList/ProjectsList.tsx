//CSS
import { ProjectsListWrapper } from "./ProjectList.styled";

// Interface
import { Project } from "@/src/components/templates/ProjectsPage/projects";

interface ProjectListProps {
  projects: Project[];
}

const ProjectsList = ({ projects }: ProjectListProps) => {
  return (
    <ProjectsListWrapper>
      <ul>
        {projects.map((project) => (
          <li key={project.name}>
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
