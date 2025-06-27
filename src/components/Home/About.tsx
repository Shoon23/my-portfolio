import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./home.css";
type AboutProps = {
  sectionRef: React.RefObject<HTMLElement>;
};
const About = ({ sectionRef }: AboutProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-gray-100 flex items-center justify-center"
    >
      <div ref={ref} className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            animate={
              inView && {
                opacity: 1,
                x: 0,
              }
            }
            initial={{
              opacity: 0,
              x: -40,
            }}
            transition={{
              delay: 0.4,
              ease: "easeInOut",
            }}
            className=" text-2xl font-bold text-[#47926B] mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            animate={
              inView && {
                opacity: 1,
                x: 0,
              }
            }
            initial={{
              opacity: 0,
              x: 120,
            }}
            transition={{
              delay: 0.6,
              ease: "easeInOut",
            }}
            className="text-xs md:text-lg text-gray-600 leading-relaxed indent-6 about-card"
          >
            Hi! I'm Sean Wilfred T. Custodio, a passionate Computer Science
            graduate (Cum Laude) from the University of Northern Philippines. I
            specialize in full-stack web development, with hands-on experience
            building responsive, scalable, and user-focused applications.
          </motion.p>
          <motion.p
            animate={
              inView && {
                opacity: 1,
                x: 0,
              }
            }
            initial={{
              opacity: 0,
              x: -120,
            }}
            transition={{
              delay: 0.8,
              ease: "easeInOut",
            }}
            className="text-xs md:text-lg text-gray-600 leading-relaxed mt-4 indent-6 about-card"
          >
            My thesis project, NOTEBOT, is an AI-powered study companion that
            generates quizzes and interacts with users through a chatbot
            combining my interests in education, automation, and clean UI/UX
            design. I enjoy working with technologies like JavaScript, React.js,
            Node.js, PHP (Laravel), MySQL, and tools such as Git, Postman, and
            VS Code.
          </motion.p>
          <motion.p
            animate={
              inView && {
                opacity: 1,
                x: 0,
              }
            }
            initial={{
              opacity: 0,
              x: 120,
            }}
            transition={{
              delay: 1,
              ease: "easeInOut",
            }}
            className="text-xs md:text-lg text-gray-600 leading-relaxed mt-4 indent-6 about-card"
          >
            I build things from the ground up from planning and designing to
            deploying live, working products. Whether it's a budgeting tool, a
            social media app, or a custom learning system, I'm driven by turning
            ideas into real, working solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
