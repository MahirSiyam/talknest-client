import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/teenager-people-national-flags-board_53876-22200.jpg?ga=GA1.1.609713635.1748710786&semt=ais_hybrid&w=740)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-gray-100 text-6xl font-extrabold">
            <Typewriter
              words={[
                "Learn Spanish, French, Japanese — One Word at a Time!",
                "Speak the World: Arabic, German, Mandarin & More!",
                "Say Hello in 10 Languages — Ready?",
                "Unlock New Opportunities: Learn a New Language!",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="mb-5 text-gray-100 text-lg font-semibold">
            Learning a different language opens doors to new cultures and perspectives. It improves your brain’s memory, problem-solving skills, and communication. With each new word, you connect more deeply with people around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;