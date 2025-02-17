import React, { useState, useEffect } from "react";

const getRandomSpeed = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

interface Car {
  positionX: number;
  positionY: number;
  speedX: number;
  speedY: number;
  directionX: number;
  directionY: number;
  isHorizontal: boolean;
}

const RaceCarAnimation: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([
    {
      positionX: 0,
      positionY: 0,
      speedX: getRandomSpeed(5, 10),
      speedY: getRandomSpeed(3, 8),
      directionX: 1,
      directionY: 1,
      isHorizontal: true,
    },
    {
      positionX: 0,
      positionY: 0,
      speedX: getRandomSpeed(5, 10),
      speedY: getRandomSpeed(3, 8),
      directionX: 1,
      directionY: 1,
      isHorizontal: true,
    },
    {
      positionX: 0,
      positionY: 0,
      speedX: getRandomSpeed(5, 10),
      speedY: getRandomSpeed(3, 8),
      directionX: 1,
      directionY: 1,
      isHorizontal: true,
    },
  ]);

  useEffect(() => {
    const racingSectionWidth = window.innerWidth; // Full width of the screen for racing area
    const racingSectionHeight = 200; // Height of the racing section
    const carWidth = 100; // Width of the car
    const carHeight = 50; // Height of the car

    const interval = setInterval(() => {
      setCars((prevCars) =>
        prevCars.map((car) => {
          if (car.isHorizontal) {
            // Horizontal movement
            let newPositionX = car.positionX + car.speedX * car.directionX;

            // Horizontal boundary checks
            if (newPositionX >= racingSectionWidth - carWidth) {
              newPositionX = racingSectionWidth - carWidth;
              car.directionX = -1;
              car.isHorizontal = false; // Switch to vertical movement after horizontal is complete
            } else if (newPositionX <= 0) {
              newPositionX = 0;
              car.directionX = 1;
            }

            car.positionX = newPositionX;
          } else {
            // Vertical movement after horizontal is complete
            let newPositionY = car.positionY + car.speedY * car.directionY;

            // Vertical boundary checks
            if (newPositionY >= racingSectionHeight - carHeight) {
              newPositionY = racingSectionHeight - carHeight;
              car.directionY = -1;
              car.isHorizontal = true; // Switch to horizontal movement after vertical is complete
            } else if (newPositionY <= 0) {
              newPositionY = 0;
              car.directionY = 1;
            }

            car.positionY = newPositionY;
          }

          return car;
        })
      );
    }, 1000 / 60); // 60 FPS for smooth animation

    // Update the speed randomly every 5 seconds for all cars
    const speedChangeInterval = setInterval(() => {
      setCars((prevCars) =>
        prevCars.map((car) => ({
          ...car,
          speedX: getRandomSpeed(5, 10),
          speedY: getRandomSpeed(3, 8),
        }))
      );
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(speedChangeInterval);
    };
  }, []);

  return (
    <div
      className="relative w-full h-[200px] bg-gray-300 overflow-hidden rounded-lg shadow-lg"
      style={{
        position: "relative",
      }}
    >
      {cars.map((car, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            transform: `translateX(${car.positionX}px) translateY(${car.positionY}px)`, // Move car both horizontally and vertically
            transition: "transform 0.1s linear", // Smooth transition
          }}
        >
          <div className="w-[100px] h-[50px] bg-red-500 rounded-lg flex items-center justify-center">
            🚗💨
          </div>
        </div>
      ))}
    </div>
  );
};

export default RaceCarAnimation;
