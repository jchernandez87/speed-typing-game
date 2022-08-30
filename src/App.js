import "./App.css";
import { useEffect } from "react";
import useCustom from "./useCustom";

function App() {
  const [
    words,
    timeRemaining,
    setTimeRemaining,
    start,
    setStart,
    wordCount,
    setWordCount,
    language,
    textareaRef,
    calculateWords,
    handleChange,
    startGame,
    toggleLanguage,
    restart,
  ] = useCustom();

  useEffect(() => {
    if (start && timeRemaining > 0) {
      setTimeout(() => setTimeRemaining((time) => time - 1), 1000);
    } else if (timeRemaining === 0) {
      setStart(false);
      setWordCount(calculateWords(words));
    }
  }, [start, timeRemaining]);

  return (
    <div className="App">
      <h1>
        {language
          ? "Cuantas palabras puedes escribir?"
          : "How fast do you type?"}
      </h1>
      <textarea
        ref={textareaRef}
        disabled={!start}
        name="words"
        onChange={handleChange}
        value={words}
      />
      <h4>
        {language
          ? `Tiempo restante: ${timeRemaining}`
          : `Time remaining: ${timeRemaining}`}
      </h4>
      {timeRemaining === 0 ? (
        <button onClick={restart}>
          {language ? "Intentalo de nuevo !!" : "Try again !!"}
        </button>
      ) : (
        <button disabled={start} onClick={startGame}>
          {language ? "Iniciar" : "Start"}
        </button>
      )}
      <h1>
        {language
          ? `Numero de palabras: ${wordCount}`
          : `Word count: ${wordCount}`}
      </h1>
      <button onClick={toggleLanguage}>
        {language ? "Cambiar idioma: eng" : "Change language: spa"}
      </button>
    </div>
  );
}

export default App;
