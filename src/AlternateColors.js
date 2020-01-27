import React from "react";

function AlternateColors({ phrase, colors }) {
  console.log("rendering");
  const words = phrase.split(" ");
  const letterSpans = words.map(word => word.split(""));
  let colorIndex = 0;

  return (
    <div className="message">
      {letterSpans.map((words, index) => {
        return (
          <span key={index}>
            {words.map((char, i) => {
              colorIndex = colorIndex < colors.length ? colorIndex : 0;
              ++colorIndex;
              return (
                <span key={i} style={{ color: colors[colorIndex - 1] }}>
                  {char}
                </span>
              );
            })}{" "}
          </span>
        );
      })}
    </div>
  );
}

export default AlternateColors;
