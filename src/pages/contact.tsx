import Head from "next/head";
import ContactPage from "../components/templates/ContactPage/ContactPage";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact me</title>
      </Head>
      <main>
        <ContactPage />
      </main>
    </>
  );
}