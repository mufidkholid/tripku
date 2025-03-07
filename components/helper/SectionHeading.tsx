import React from "react";

type Props = {
  heading: string;
};
const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-xl sm:text-3xl text-primary font-bold">{heading}</h1>
    </div>
  );
};

export default SectionHeading;
