import React from "react";
import { FaGithub } from "react-icons/fa";

interface Props {
  site: string;
  github: string;
}
const OverviewHeader: React.FC<Props> = ({ github, site }) => {
  return (
    <div className="flex justify-between">
      <h1 className="text-5xl font-bold">Overview</h1>
      <div className="flex items-center gap-2">
        <button className="mb-4 rounded-md border-2 border-green-500 flex items-center px-5 py-3 shadow-lg transition ease-in delay-150 hover:scale-110  hover:text-white hover:bg-green-500">
          <a href={site} target="_blank">
            Visit Site
          </a>
        </button>
        <a href={github} target="_blank">
          <FaGithub size={28} />
        </a>
      </div>
    </div>
  );
};

export default OverviewHeader;
