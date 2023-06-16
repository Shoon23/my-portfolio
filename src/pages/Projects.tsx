import Header from "../components/Projects/Header";
import ProjectCard from "../components/Projects/ProjectCard";
import socialMedia from "../data/social_media.json";
import expenseTracker from "../data/expense_tracker.json";
import keyboardEccomm from "../data/keyboard_store.json";
const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen">
          <div className="flex flex-wrap w-full justify-center gap-3 p-2">
            <ProjectCard
              name={expenseTracker.name}
              img={expenseTracker.img}
              overview={expenseTracker.overview}
              techStack={expenseTracker.techStack}
              github={expenseTracker.github}
              more={"/project/expenseTracker"}
              site={expenseTracker.site}
            />
            <ProjectCard
              name={socialMedia.name}
              img={socialMedia.img}
              overview={socialMedia.overview}
              techStack={socialMedia.techStack}
              github={socialMedia.github}
              more={"/project/socialMedia"}
              site={socialMedia.site}
            />
            <ProjectCard
              name={keyboardEccomm.name}
              img={keyboardEccomm.img}
              overview={keyboardEccomm.overview}
              techStack={keyboardEccomm.techStack}
              github={keyboardEccomm.github}
              more={"/project/keyboardEccomm"}
              site={keyboardEccomm.site}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
