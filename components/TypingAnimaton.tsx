"use client";

import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 text-center text-black drop-shadow-lg">
        <span className="text-blue-500">Welcome to</span>{" "}
        <Typewriter
          words={[
            "Leave Management System",
            "Efficient Leave Tracking",
            "Streamlined Administration",
          ]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      <p className="text-sm md:text-lg lg:text-xl font-light text-center max-w-3xl mt-6 px-4">
        Simplify your{" "}
        <span className="text-blue-500 font-bold drop-shadow-lg">
          leave management
        </span>{" "}
        with our{" "}
        <span className="text-blue-500 font-bold drop-shadow-lg">
          user-friendly system
        </span>
         Whether you’re
        managing a small team or a large organization, our system is designed to{" "}
        <span className="text-blue-500 font-bold drop-shadow-lg">
          enhance efficiency
        </span>{" "}
        and provide a seamless experience.
      </p>
    </div>
  );
};

export default TypingAnimation;
