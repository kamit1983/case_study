import React from "react";
import RaceCarAnimation from "../molecules/RaceCarAnimation";
import Heading from "../atoms/Heading";

const RacingCarSection: React.FC = () => {
  return (
    <div className="w-full p-6 rounded-lg shadow-md flex flex-col items-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x z-0"></div>

      {/* Header */}
      <Heading text="🏁 Racing Car" />
      
      <div className="w-full flex justify-center mt-8 z-10">
        <RaceCarAnimation />
      </div>
    </div>
  );
};

export default RacingCarSection;
