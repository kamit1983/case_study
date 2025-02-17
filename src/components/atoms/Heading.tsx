import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h2 className="text-xl font-bold text-center text-gray-800 z-10 text-white text-3xl font-bold mb-6">{text}</h2>
  );
};

export default Heading;
