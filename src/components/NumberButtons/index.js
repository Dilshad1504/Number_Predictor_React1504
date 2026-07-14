import React from "react";
import "./index.css";

const NumberButtons = (props) => {
  const { numbers, selected, setSelected }=props
  return (
    <div className="buttons">
      {numbers.map((item) => (
        <button
          key={item.id}
          className={selected === item.value ? "active" : ""}
          onClick={() => setSelected(item.value)}
        >
          {item.value}
        </button>
      ))}
    </div>
  );
};

export default NumberButtons;