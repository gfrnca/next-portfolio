export interface Course {
    title: string;
    about: string;
    description: string;
    length: string;
    finished: boolean;
  }
  
  export const coursesList: Course[] = [
    {
      title: "Alura",
      about: "JavaScript para Web: Crie páginas dinâmicas",
      description: "I learned about optimized code that goes through all the buttons, reducing code repetition and increasing the reusability and maintainability of this code, among other things such as playing audio.",
      length: "2023",
      finished: true,
    },
    {
      title: "Alura",
      about: "React com JavaScript: lidando com arquivos estáticos",
      description: "Basic React course that I made to consolidate my React basic knowledge structure.",
      length: "2023", 
      finished: true,
    },
    {
      title: "Alura",
      about: "React: abstraindo seu CSS com Styled Components",
      description: "",
      length: "2023",
      finished: true,
    },
    {
      title: "Udemy",
      about: "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
      description: "Course where I am consolidating my React skills.",
      length: "2023",
      finished: false,
    },
  ];
  