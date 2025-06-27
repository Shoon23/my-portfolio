import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "../home.css";
interface Props {
  isSwap?: boolean;
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
  github,
  img,
  overview,
  site,
  techStack,
  name,
  more,
}) => {
  return (
    <div className="flex-col border md:flex-row flex  rounded-md project-card">
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
    </div>
  );
};

export default ProjectCard;
