export interface Project {
  name: string;
  image: string;
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
    image: "camel",
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
    image: "portfolio",
    subtitle: "Landing Page",
    description: "A landing page built to show my skills.",
    languages: ["HTML5", "Styled Components", "React", "Next.js", "Typescript"],
    github: "https://github.com/gfrnca/NextGfrncaPortfolio",
    deploy: "https://gfrnca.vercel.app/",
    finished: false,
  },
  {
    name: "RX6",
    image: "rx6",
    subtitle: "Landing Page",
    description:
      "The goal of this website is to show potential RX6 clients how our services work and how they can be implemented on their own servers.",
    languages: ["HTML5", "Styled Components", "React", "Next.js", "Typescript"],
    github: "https://github.com/gfrnca/NextRX6Web",
    deploy: "https://rx6.vercel.app/",
    finished: true,
  },
  {
    name: "IP Address Tracker",
    image: "ipaddress",
    subtitle: "Util",
    description: "A simple IP Tracker created with React using a public API.",
    languages: ["HTML5", "Styled Components", "React", "JavaScript"],
    github: "https://github.com/gfrnca/ReactIPTracker",
    deploy: "https://iptracker-gfrnc.vercel.app/",
    finished: true,
  },
];
