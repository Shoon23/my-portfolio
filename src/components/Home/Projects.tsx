import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import socialMedia from "../../data/social_media.json";
import expenseTracker from "../../data/expense_tracker.json";
import keyboardEccomm from "../../data/keyboard_store.json";
const Projects = () => {
  const isMdScreen = window.innerWidth >= 768;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} id="projects" className="min-h-screen flex ">
      <div className="px-10 py-20 w-full">
        <motion.h1
          animate={
            inView && {
              opacity: 1,
              x: 0,
            }
          }
          initial={{
            opacity: 0,
            x: -80,
          }}
          transition={{
            delay: 0.6,
            ease: "easeInOut",
          }}
          className="md:pl-8 text-4xl font-bold text-green-500"
        >
          Projects
        </motion.h1>
        <div className="flex md:px-24 w-full flex-col mt-6 gap-5">
          <ProjectCard
            inView={inView}
            overview={expenseTracker.overview}
            techStack={expenseTracker.techStack}
            site={expenseTracker.site}
            github={expenseTracker.github}
            img={expenseTracker.img}
            name={expenseTracker.name}
            more={"/project/expenseTracker"}
          />
          <ProjectCard
            inView={inView}
            isSwap={isMdScreen}
            overview={socialMedia.overview}
            techStack={socialMedia.techStack}
            site={socialMedia.site}
            github={socialMedia.github}
            img={socialMedia.img}
            name={socialMedia.name}
            more={"/project/socialMedia"}
          />
          <ProjectCard
            inView={inView}
            overview={keyboardEccomm.overview}
            techStack={keyboardEccomm.techStack}
            site={keyboardEccomm.site}
            github={keyboardEccomm.github}
            img={keyboardEccomm.img}
            name={keyboardEccomm.name}
            more={"/project/keyboardEccomm"}
          />
          <motion.div
            animate={
              inView && {
                opacity: 1,
              }
            }
            initial={{
              opacity: 0,
            }}
            transition={{
              delay: 0.8,
              ease: "easeInOut",
            }}
            className="transition ease-in-out delay-150  hover:scale-110 flex gap-1 items-center self-center mt-10 cursor-pointer"
          >
            <Link
              to={"/projects"}
              className="transition ease-in-out delay-150 underline underline-offset-4 hover:text-green-400 text-2xl text-gray-400"
            >
              View More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
