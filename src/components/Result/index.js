import React from "react";
import "./index.css"

const Result = (props) => {
    const { selected, random, message }=props
  return (
    <div className="right">
      <div className="result">
        <div className="result-box">
          <h2>Your Pick</h2>
          <h1>{selected || "-"}</h1>
        </div>

        <div className="result-box">
          <h2>Random Pick</h2>
          <h1>{random || "-"}</h1>
        </div>
      </div>

      {message && (
        <h2 className={message === "Correct Guess" ? "correct" : "wrong"}>
          {message}
        </h2>
      )}
    </div>
  );
};

export default Result;