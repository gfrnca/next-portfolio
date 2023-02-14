import Head from "next/head";
import HomePage from "../components/templates/HomePage/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
