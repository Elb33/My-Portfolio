import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Intro from "../pages/Intro";
import Skills from "../pages/Skills";

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-500 gradient-direction-135">
      <Header />
      <section id="intro" className="py-10 ">
        <div className="container ">
          <Intro />
        </div>
      </section>
      <section id="about" className="py-10 ">
        <div className="container  w-full">
          <About />
        </div>
      </section>
      <section id="skill" className="pt-20 pb-10 ">
        <div className="container w-full ">
          <Skills />
        </div>
      </section>
      <section id="projects" className="py-20 ">
        <div className="container mx-auto">
          <Projects />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
