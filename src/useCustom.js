import { useState, useRef } from "react";

const useCustom = () => {
  const startingTime = 10;

  const [words, setWords] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [start, setStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [language, setLanguage] = useState(false);
  const textareaRef = useRef(null);

  const calculateWords = (text) => {
    const strArr = text.split(" ");
    const wordsNum = strArr.filter((word) => word !== "").length;
    return wordsNum;
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setWords(value);
  };

  const startGame = () => {
    setStart(true);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  };

  const toggleLanguage = () => setLanguage(!language);

  const restart = () => {
    setTimeRemaining(startingTime);
    setWords("");
    setWordCount(0);
  };

  return [
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
  ];
};

export default useCustom;
