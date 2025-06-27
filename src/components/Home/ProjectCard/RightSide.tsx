import React from "react";

interface Props {
  img: string;
}

const RightSide: React.FC<Props> = ({ img }) => {
  return (
    <div className="flex-1 min-h-[200px] md:min-h-[300px]">
      <img
        src={img}
        alt="Project screenshot"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default RightSide;
