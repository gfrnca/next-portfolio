// General
import { useState } from "react";

// CSS
import { ProjectsPageWrapper } from "./ProjectsPage.styled";

// Components
import { Container } from "@/src/styles/global";
import ProjectsHeader from "../../organisms/ProjectsPage/ProjectsHeader/ProjectsHeader";
import ProjectCard from "../../organisms/ProjectsPage/ProjectsList/ProjectsList";
import ProjectsList from "../../organisms/ProjectsPage/ProjectsList/ProjectsList";

// Data
import { projectsList } from "../../contants/projects";
import ProjectHandler from "../../organisms/ProjectsPage/ProjectHandler/ProjectHandler";

const ProjectsPage = () => {
  const [projects, setProjects] = useState(projectsList);

  const handleSearch = (searchTerm: string) => {
    const filteredProjects = projectsList.filter((project) =>
      project.languages.some((language) =>
        language.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setProjects(filteredProjects);
  };

  return (
    <ProjectsPageWrapper>
      <Container>
        <ProjectsHeader setSearch={handleSearch} />

        <ProjectsList projects={projects} />
      </Container>
    </ProjectsPageWrapper>
  );
};

export default ProjectsPage;
