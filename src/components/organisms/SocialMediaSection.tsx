import React, { useState } from "react";

// Form to participate in the Racing Event
const RacingEventForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [carModel, setCarModel] = useState<string>("");
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div className="w-full bg-gray-200 p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-900">Join the Racing Event</h2>
      {isFormSubmitted ? (
        <div className="text-center text-xl text-green-600">
          <p>Thank you for participating, {name}! We will notify you with event details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg text-gray-800">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="carModel" className="text-lg text-gray-800">Car Model:</label>
            <input
              type="text"
              id="carModel"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
              Participate
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

// Social Media Section with form
const SocialMediaSection: React.FC = () => {
  return (
    <div className="w-full bg-blue-700 text-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Follow Us on Social Media</h2>
      <div className="flex justify-center gap-6">
        <a href="#" className="text-xl hover:underline text-gray-100">Facebook</a>
        <a href="#" className="text-xl hover:underline text-gray-100">Twitter</a>
        <a href="#" className="text-xl hover:underline text-gray-100">Instagram</a>
      </div>
      <div className="p-6">
        <RacingEventForm />
      </div>
    </div>
  );
};

export default SocialMediaSection;
