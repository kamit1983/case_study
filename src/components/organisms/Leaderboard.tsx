import React, { useState, useEffect } from "react";

// Leaderboard component with countdown and periodic new leader announcement
const Leaderboard: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(5); // Countdown state
  const [leader, setLeader] = useState<string>("???"); // Initially masked leader
  const [leaderboard, setLeaderboard] = useState<string[]>([
    "Car 1",
    "Car 2",
    "Car 3",
  ]); // Sample leaderboard data
  const [isCountingDown, setIsCountingDown] = useState<boolean>(false); // Flag to check if countdown is running
  const [isLeaderRevealed, setIsLeaderRevealed] = useState<boolean>(false); // Flag to track if the leader is revealed

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout | undefined;

    if (isCountingDown) {
      // Countdown interval
      countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            // Announce the new leader when countdown finishes
            clearInterval(countdownInterval);
            announceNewLeader();
            return 5; // Reset countdown after announcing leader
          }
          return prev - 1;
        });
      }, 1000); // Decrease every second
    } else {
      // Cleanup interval if not counting down
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    }

    return () => clearInterval(countdownInterval); // Cleanup on unmount
  }, [isCountingDown]);

  const announceNewLeader = () => {
    // Change leader randomly every countdown
    const newLeader = leaderboard[Math.floor(Math.random() * leaderboard.length)];
    setLeader(newLeader);
    setIsLeaderRevealed(true); // Reveal the leader after countdown
    setIsCountingDown(false); // Stop the countdown
  };

  const startCountdown = () => {
    setIsCountingDown(true);
    setIsLeaderRevealed(false); // Reset the leader reveal state
    setLeader("???"); // Mask the leader at the start
  };

  return (
    <div className="w-full h-[350px] bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center overflow-hidden">
      <h2 className="text-center text-xl font-bold mb-4">Leaderboard</h2>

      <div className="flex justify-center items-center flex-col space-y-4 w-full">
        {/* Countdown section */}
        <div className="flex justify-center items-center space-x-4 w-full">
          <div className="w-full text-center text-4xl font-bold text-blue-600">
            <span>Countdown: </span>
            {countdown}
          </div>
        </div>

        {/* Current Leader section */}
        <div className="w-full text-center">
          <div className="text-lg">Current Leader:</div>
          <div
            className={`text-2xl font-semibold ${
              isLeaderRevealed ? "text-green-500" : "text-gray-400"
            }`}
          >
            {leader}
          </div>
        </div>

        {/* Leaderboard list */}
        <div className="w-full max-h-[200px] overflow-y-auto space-y-2">
          {leaderboard.map((car, index) => (
            <div
              key={index}
              className="text-center text-lg font-medium text-gray-700 break-words"
            >
              {index + 1}. {car}
            </div>
          ))}
        </div>

        {/* Button to start countdown and leader announcement */}
        <div className="mt-4">
          {!isCountingDown ? (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={startCountdown}
            >
              Start Countdown
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
              disabled
            >
              Countdown in Progress...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
