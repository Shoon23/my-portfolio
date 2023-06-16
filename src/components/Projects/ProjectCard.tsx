import React from "react";
import { iconMap } from "../SingleProject/TechStacks";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  img: string;
  overview: string;
  techStack: string[];
  github: string;
  more: string;
  site: string;
}

const ProjectCard: React.FC<Props> = ({
  img,
  name,
  overview,
  techStack,
  github,
  site,
  more,
}) => {
  return (
    <div className="flex flex-col w-full md:w-80 shadow-xl border border-gray-500">
      <img src={img} alt="Image" className="w-full h-48 md:h-64 object-cover" />
      <div className="p-4">
        <h1 className="font-bold text-xl mb-2">{name}</h1>
        <p className="text-gray-600">{overview}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex flex-col">
          <h1 className="text-gray-900 font-semibold text-lg">Tools</h1>
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech) => {
              const IconComponent = iconMap[tech];
              return (
                IconComponent && (
                  <IconComponent className="mr-2 text-xl w-7 h-7" key={tech} />
                )
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-4 md:mt-0 md:ml-4">
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
      <Link
        to={more}
        className="mb-4 rounded-md border-2 border-green-500 self-center px-3 shadow-lg transition ease-in delay-150 hover:scale-110 hover:text-white hover:bg-green-500"
      >
        View More
      </Link>
    </div>
  );
};

export default ProjectCard;
