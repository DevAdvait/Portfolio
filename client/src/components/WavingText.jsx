import React from "react";
import "../styles/wavingText.css";

const WavingText = () => {
  const firstName = "Advait";
  const first = firstName.split("");
  const lastName = "Tumbre";
  const last = lastName.split("");

  return (
    <span className="waving-text">
      {first.map((first, index) => (
        <span
          key={index}
          className="wave-letter"
          style={{ animationDelay: `${0.2 * index}s` }}
        >
          {first}
        </span>
      ))}
      {" "}
      {last.map((last, index) => (
        <span
          key={index}
          className="wave-letter"
          style={{ animationDelay: `${0.2 * index}s` }}
        >
          {last}
        </span>
      ))}
    </span>
  );
};

export default WavingText;
