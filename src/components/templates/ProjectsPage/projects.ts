export interface Project {
  name: string;
  description: string;
  subtitle: string;
  languages: string[];
}

export const projectsList: Project[] = [
  {
    name: "Camel",
    subtitle: "Mini-blog",
    description:
      "A mini-blog containing functions like authentication, posts and friends.",
    languages: ["HTML5", "CSS3", "React", "Typescript", "Firebase"],
  },
  {
    name: "Portfolio",
    subtitle: "Landing Page",
    description: "A landing page built to show my skills.",
    languages: ["HTML5", "Styled Components", "React", "Typescript"],
  },
];
