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
    name: "Ossain",
    image: "ossain",
    subtitle: "Final Paper Landing Page",
    description: "A landing page built to show a idea and business model of a Final Paper for the System Development technical course.",
    languages: ["HTML5", "TypeScript", "Angular", "Firebase"],
    github: "https://github.com/gfrnca/AngularOssainWeb",
    deploy: "https://ossainweb.vercel.app/",
    finished: true,
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
    subtitle: "Consuming API",
    description: "A simple IP Tracker created with React using a public API.",
    languages: ["HTML5", "Styled Components", "React", "JavaScript"],
    github: "https://github.com/gfrnca/ReactIPTracker",
    deploy: "https://iptracker-gfrnc.vercel.app/",
    finished: true,
  },
];
