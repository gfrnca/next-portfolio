import Head from "next/head";
import ProjectsPage from "../components/templates/Projects/ProjectsPage";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <main>
        <ProjectsPage />
      </main>
    </>
  );
}
