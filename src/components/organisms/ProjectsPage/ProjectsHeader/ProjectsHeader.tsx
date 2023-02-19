// CSS
import { ProjectsHeaderWrapper } from "./ProjectsHeader.styled";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  setSearch: (searchTerm: string) => void;
}

const ProjectsHeader = ({ setSearch }: SearchBarProps) => {
  return (
    <ProjectsHeaderWrapper>
      <h1 className="title">Projects</h1>
      <div className="search-bar">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search technologies"
        />
      </div>
    </ProjectsHeaderWrapper>
  );
};

export default ProjectsHeader;
