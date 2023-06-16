import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";
import Skills from "../components/Home/Skills";
import Header from "../components/Home/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
