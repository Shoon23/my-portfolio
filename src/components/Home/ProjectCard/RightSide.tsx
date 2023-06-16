import React from "react";

interface Props {
  img: string;
}

const RightSide: React.FC<Props> = ({ img }) => {
  return (
    <div className="flex-1">
      <img
        src={img}
        alt="Image"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default RightSide;
