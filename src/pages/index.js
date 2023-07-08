import React, { useState } from "react";
import NavBar from "../sections/Navbar";
import SocialIcons from "../components/SocialIcons";
import Email from "../components/Email";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Head from "next/head";
import Loader from "../components/Loader";

function Index() {
  const [isloading, setIsloading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsloading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 450);
  };
  return (
    <div className="app">
      <Head>
        <title>Marzieh Fatemi</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {showContent && (
        <>
          <NavBar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
          </main>
        </>
      )}
      <Loader isLoading={isloading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
