import React from "react";

const Bouncyballs = ({
  top,
  right,
  width,
  height,
  color,
}: {
  top: string;
  right: string;
  width: string;
  height: string;
  color: string;
}) => {
  return (
    <div
      className={`absolute ${top} ${right} ${width} ${height} ${color} rounded-full animate-bounce max-md:hidden`}
    ></div>
  );
};

export default Bouncyballs;
