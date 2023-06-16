import { motion } from "framer-motion";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

interface Props {
  isSwap?: boolean;
  inView: boolean;
  overview: string;
  techStack: string[];
  site: string;
  github: string;
  img: string;
  name: string;
  more: string;
}

const ProjectCard: React.FC<Props> = ({
  isSwap = false,
  inView,
  github,
  img,
  overview,
  site,
  techStack,
  name,
  more,
}) => {
  return (
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
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="flex-col border md:flex-row flex border-green-400 rounded-md"
    >
      {!isSwap ? (
        <>
          <LeftSide
            overview={overview}
            techStack={techStack}
            site={site}
            github={github}
            name={name}
            more={more}
          />
          <RightSide img={img} />
        </>
      ) : (
        <>
          <RightSide img={img} />
          <LeftSide
            overview={overview}
            techStack={techStack}
            site={site}
            github={github}
            name={name}
            more={more}
          />
        </>
      )}
    </motion.div>
  );
};

export default ProjectCard;
