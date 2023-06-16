import React from "react";

interface Props {
  img: string;
  overview: string;
}

const OverviewBody: React.FC<Props> = ({ img, overview }) => {
  return (
    <div>
      <img src={img} alt={"img"} className="w-full h-auto mb-2" />
      <p className="md:text-xl">{overview}</p>
    </div>
  );
};

export default OverviewBody;
