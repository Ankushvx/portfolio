import type { NextPage } from "next";
import Head from "next/head";
import Resume from "../components/Resume"; 
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ResumePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume - Ankush Verma</title>
        <meta name="description" content="Resume of Ankush Verma, Software Developer." />
      </Head>
        <NavBar />
      <Resume />
      <Footer />
    </>
  );
};

export default ResumePage;