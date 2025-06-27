import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiWebpack,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import "./home.css";
type SkillProps = {
  sectionRef: React.RefObject<HTMLElement>;
};

const Skills = ({ sectionRef }: SkillProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="min-h-screen flex bg-gray-100"
    >
      <div ref={ref} className="px-10 py-20">
        <motion.h1
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
          className="md:pl-8 text-4xl font-bold text-[#AC4830]"
        >
          Skills & Tools
        </motion.h1>
        <motion.div
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
            delay: 0.6,
            ease: "easeInOut",
          }}
          className="flex mt-10   flex-wrap gap-4 justify-center"
        >
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiReact size={80} className="text-blue-500" />
            <p className="text-center mt-2 text-gray-600">React</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiHtml5 size={80} className="text-orange-500" />
            <p className="text-center mt-2 text-gray-600">HTML</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiCss3 size={80} className="text-teal-500" />
            <p className="text-center mt-2 text-gray-600">CSS</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiTailwindcss size={80} className="text-teal-500" />
            <p className="text-center mt-2 text-gray-600">CSS</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiJavascript size={80} className="text-yellow-500" />
            <p className="text-center mt-2 text-gray-600">Javascript</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiTypescript size={80} className="text-blue-500" />
            <p className="text-center mt-2 text-gray-600">Typescript</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiNextdotjs size={80} className="text-black" />
            <p className="text-center mt-2 text-gray-600">Next.js</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiNodedotjs size={80} className="text-green-500" />
            <p className="text-center mt-2 text-gray-600">Node.js</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiExpress size={80} className="text-gray-500" />
            <p className="text-center mt-2 text-gray-600">Express.js</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiPrisma size={80} className="text-blue-500" />
            <p className="text-center mt-2 text-gray-600">Prisma</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiMysql size={80} className="text-orange-500" />
            <p className="text-center mt-2 text-gray-600">MySql</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiPostgresql size={80} className="text-yellow-500" />
            <p className="text-center mt-2 text-gray-600">PostgreSql</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <FaPython size={80} className="text-blue-500" />
            <p className="text-center mt-2 text-gray-600">Python</p>
          </div>
          <div className="transition ease-in-out delay-150 hover:scale-110 skill-card rounded-md p-4">
            <SiWebpack size={80} className="text-blue-500" />
            <p className="text-center mt-2 text-gray-600">Webpack</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
