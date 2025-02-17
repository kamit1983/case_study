import React from "react";
import RacingCarSection from "../organisms/RacingCarSection";
import Leaderboard from "../organisms/Leaderboard";
import SocialMediaSection from "../organisms/SocialMediaSection";

const HomePageLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6">
      <RacingCarSection />
      <Leaderboard />
      <SocialMediaSection />
    </div>
  );
};

export default HomePageLayout;
