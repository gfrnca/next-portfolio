export interface Project {
  name: string;
  description: string;
  subtitle: string;
  languages: string[];
  github: string;
  deploy: string;
  finished: boolean;
}

export const projectsList: Project[] = [
  {
    name: "Camel",
    subtitle: "Mini-blog",
    description:
      "A mini-blog containing functions like authentication, posts and friends.",
    languages: ["HTML5", "CSS3", "React", "Typescript", "Firebase"],
    github: "https://github.com/gfrnca/ReactBlogCamel",
    deploy: "https://camel-blog.vercel.app/",
    finished: false,
  },
  {
    name: "Portfolio",
    subtitle: "Landing Page",
    description: "A landing page built to show my skills.",
    languages: ["HTML5", "Styled Components", "React", "Next.js", "Typescript"],
    github: "https://github.com/gfrnca/NextGfrncaPortfolio",
    deploy: "https://gfrnca.vercel.app/",
    finished: false,
  },
  {
    name: "RX6",
    subtitle: "Landing Page",
    description:
      "The goal of this website is to show potential RX6 clients how our services work and how they can be implemented on their own servers.",
    languages: ["HTML5", "Styled Components", "React", "Next.js", "Typescript"],
    github: "https://github.com/gfrnca/NextRX6Web",
    deploy: "https://rx6.vercel.app/",
    finished: true,
  },
];
