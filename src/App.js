import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const startingTime = 10;

  const [words, setWords] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [start, setStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const calculateWords = (text) => {
    const strArr = text.split(" ");
    const wordsNum = strArr.filter((word) => word !== "").length;
    return wordsNum;
  };

  useEffect(() => {
    if (start && timeRemaining > 0) {
      setTimeout(() => setTimeRemaining((time) => time - 1), 1000);
    } else if (timeRemaining === 0) {
      setStart(false);
      setWordCount(calculateWords(words));
    }
  }, [start, timeRemaining]);

  const handleChange = (event) => {
    const { value } = event.target;
    setWords(value);
  };

  const startGame = () => setStart(true);

  const restart = () => {
    setTimeRemaining(startingTime);
    setWords("");
    setWordCount(0);
  };

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea name="words" onChange={handleChange} value={words} />
      <h4>Time remaining: {timeRemaining}</h4>
      {timeRemaining === 0 ? (
        <button onClick={restart}>Try again !!</button>
      ) : (
        <button disabled={start} onClick={startGame}>
          Start
        </button>
      )}
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
