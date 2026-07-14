import React from "react";
import "./index.css"

const DisplayArea = (props) => {
    const { selected, predictNumber, clearData }=props;
  return (
    <>
      <h3 className="or-text">OR</h3>

      <div className="num-display-area">
        {selected}
      </div>

      <div className="btn-row">
        <button
          className="predict-btn"
          onClick={predictNumber}
        >
          PREDICT NUMBER
        </button>

        <button
          className="clear-btn"
          onClick={clearData}
        >
          CLEAR
        </button>
      </div>
    </>
  );
};

export default DisplayArea;