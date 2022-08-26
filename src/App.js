import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const startingTime = 10;

  const [words, setWords] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [start, setStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [language, setLanguage] = useState(false)
  const textareaRef = useRef(null)

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

  const startGame = () => {
    setStart(true)
    textareaRef.current.disabled = false
    textareaRef.current.focus()

  };

  const toggleLanguage = () => setLanguage(!language)

  const restart = () => {
    setTimeRemaining(startingTime);
    setWords("");
    setWordCount(0);
  };

  return (
    <div className="App">
      <h1>{ language ? "Cuantas palabras puedes escribir?" : "How fast do you type?"}</h1>
      <textarea ref={textareaRef} disabled={!start} name="words" onChange={handleChange} value={words} />
      <h4>{ language ? `Tiempo restante: ${timeRemaining}`: `Time remaining: ${timeRemaining}`}</h4>
      {timeRemaining === 0 ? (
        <button onClick={restart}>{ language ? "Intentalo de nuevo !!" : "Try again !!"}</button>
      ) : (
        <button disabled={start} onClick={startGame}>
          { language ? "Iniciar" : "Start"}
        </button>
      )}
      <h1>{ language ? `Numero de palabras: ${wordCount}`: `Word count: ${wordCount}`}</h1>
      <button onClick={toggleLanguage}>{language ? "Cambiar idioma: eng" : "Change language: spa"}</button>
    </div>
  );
}

export default App;
