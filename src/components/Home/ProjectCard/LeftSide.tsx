import { FaGithub, FaGlobe } from "react-icons/fa";
import { iconMap } from "../../SingleProject/TechStacks";
import { Link } from "react-router-dom";

interface Props {
  overview: string;
  techStack: string[];
  site: string;
  github: string;
  name: string;
  more: string;
}

const LeftSide: React.FC<Props> = ({
  overview,
  techStack,
  github,
  site,
  name,
  more,
}) => {
  return (
    <div className="flex-1  p-4 px-8 md:px-16 rounded-md">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl mb-5 md:mb-10">{name}</h1>

        <Link
          to={more}
          className="h-10 flex items-center px-2 rounded-md border-2 border-green-500  shadow-lg transition ease-in delay-150 hover:scale-110  hover:text-white hover:bg-green-500"
        >
          More
        </Link>
      </div>
      <p className="text-gray-500 mb-5 md:mb-10 indent-4">{overview}</p>
      <div className="flex justify-between gap-1">
        <div className="flex flex-col">
          <h1 className="text-gray-900 font-semibold text-lg">Tools</h1>
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech: any, idx: number) => {
              const IconComponent = iconMap[tech];
              return (
                IconComponent && (
                  <IconComponent key={idx} className="mr-2 text-xl w-7 h-7" />
                )
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-900 font-semibold text-lg">Links</h1>

          <div className="flex gap-1">
            <a href={github} target="_blank">
              <FaGithub size={28} />
            </a>
            <a href={site} target="_blank">
              <FaGlobe size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
