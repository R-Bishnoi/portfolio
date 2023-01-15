import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Machine Learning Enthusiast",
          "MERN Stack Developer",
          "Data Analyst",
          "Student At NITJ (B.Tech)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
