import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h2 className="text-xl font-bold text-center text-gray-800">{text}</h2>
  );
};

export default Heading;
