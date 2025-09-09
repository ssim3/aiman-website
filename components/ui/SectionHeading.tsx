import React from "react";
import Bouncyballs from "./bouncyballs";

interface SectionHeadingProps {
  title: string;
  description: string;
  width?: string;
  height?: string;
  topOne: string;
  rightOne: string;
  topTwo: string;
  rightTwo: string;
  margin?: string;
}

const SectionHeading = ({
  title,
  description,
  width = "w-8",
  height = "h-8",
  margin = "my-20",
  topOne,
  rightOne,
  topTwo,
  rightTwo,
}: SectionHeadingProps) => {
  return (
    <>
      <Bouncyballs
        top={topOne}
        right={rightOne}
        width={width}
        height={height}
        color="bg-[var(--primary)]"
      />
      <Bouncyballs
        top={topTwo}
        right={rightTwo}
        width={width}
        height={height}
        color="bg-[var(--primary)]"
      />
      <div className={`text-center flex flex-col ${margin} gap-8`}>
        <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-5xl text-[var(--secondary)] font-bold"
        ></h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default SectionHeading;
