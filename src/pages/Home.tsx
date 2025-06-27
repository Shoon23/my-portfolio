import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";
import Skills from "../components/Home/Skills";
import Header from "../components/Home/Header";
import { useState, useRef, useEffect } from "react";
type SectionName =
  | "hero"
  | "about"
  | "services"
  | "skills"
  | "projects"
  | "contact";

const Home = () => {
  const [activeSection, setActiveSection] = useState<SectionName>("hero");

  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id as SectionName;
            setActiveSection(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero sectionRef={sectionRefs.hero} />
        <About sectionRef={sectionRefs.about} />
        <Services sectionRef={sectionRefs.services} />
        <Skills sectionRef={sectionRefs.skills} />
        <Projects sectionRef={sectionRefs.projects} />
        {/* <Contact sectionRef={sectionRefs.contact} /> */}
      </main>
    </>
  );
};

export default Home;
