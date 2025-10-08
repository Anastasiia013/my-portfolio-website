import HeroSection from "../../shared/components/HeroSection/HeroSection";
import AboutMe from "../../shared/components/AboutMe/AboutMe";
import Skills from "../../shared/components/Skills/Skills";
import Projects from "../../shared/components/Projects/Projects";

const HomePage = () => {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </>
  );
};
export default HomePage;
