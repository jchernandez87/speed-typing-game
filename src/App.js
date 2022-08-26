import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [words, setWords] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start === true) {
      if (timeRemaining > 0) {
        setTimeout(() => setTimeRemaining((time) => time - 1), 1000);
        console.log(timeRemaining);
      }
    }
  }, [start, timeRemaining]);

  const handleChange = (event) => {
    const { value } = event.target;

    setWords(value);
  };

  const calculateWords = (text) => {
    const strArr = text.split(" ");
    const wordsNum = strArr.filter((word) => word !== "").length;

    console.log(wordsNum);
    return wordsNum;
  };

  const startGame = () => setStart(true);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea name="words" onChange={handleChange} value={words} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;
