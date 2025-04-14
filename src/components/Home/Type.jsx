import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Team Lead at Protech",
          "React & Node.js Expert",
          "MongoDB Data Wrangler",
          "Blogger & Mentor",
          "Builder of Secure Web Apps",
          "Fan of Clean Code & Road Trips 🏍️",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
