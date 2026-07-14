import React from "react";
import "./index.css";

const Header = (props) => {
  const {score}=props
  return (
    <>
      <h1 className="title">
        Number <span>Predictor</span>
      </h1>

      <h3 className="score">
        Score: {score}
      </h3>
    </>
  );
};

export default Header;