import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import NumberButtons from "./components/NumberButtons";
import DisplayArea from "./components/DisplayArea";
import Result from "./components/Result";

const numbers = [
  { id: 1, value: 1 },
  { id: 2, value: 2 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
  { id: 6, value: 6 },
  { id: 7, value: 7 },
  { id: 8, value: 8 },
  { id: 9, value: 9 },
];

function App() {
  const [selected, setSelected] = useState("");
  const [random, setRandom] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const predictNumber = () => {
    if (selected === "") return;

    const randomNumber = Math.ceil(Math.random() * 9);

    setRandom(randomNumber);

    if (selected === randomNumber) {
      setScore((prev) => prev + 1);
      setMessage("Correct Guess");
    } else {
      setScore((prev) => prev - 1);
      setMessage("Wrong Guess");
    }
  };

  const clearData = () => {
    setSelected("");
    setRandom("");
    setMessage("");
    setScore(0);
  };

  return (
    <div className="app">
      <Header score={score} />

      <div className="container">
        <div className="left">

          <p className="info">
            Choose any digit from one to nine. When you predict, a random
            number is drawn. Match it and score rises — miss and it falls.
          </p>

          <h3>Choose Your Number:</h3>

          <NumberButtons
            numbers={numbers}
            selected={selected}
            setSelected={setSelected}
          />

          <DisplayArea
            selected={selected}
            predictNumber={predictNumber}
            clearData={clearData}
          />

        </div>

        {
          random !== "" && (
            <Result
              selected={selected}
              random={random}
              message={message}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;