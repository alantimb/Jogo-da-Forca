import React, { useState } from "react";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import palavras from "./palavras";

const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function App() {
  const [chosenWord, setChosenWord] = useState([]);
  const [disableInput, setDisableInput] = useState(true);
  const [guess, setGuess] = useState("");
  const [hiddenWord, setHiddenWord] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [usedLetters, setUsedLetters] = useState(alphabet);
  const [wordColor, setWordColor] = useState("black");

  function startGame() {
    setDisableInput(false);
    setUsedLetters([]);
    setGuess("");
    setMistakes(0);
    setWordColor("black");
    chooseWord();
  }

  function chooseWord() {
    const i = Math.floor(Math.random() * palavras.length);
    const word = palavras[i];
    const arrayWord = word.split("");
    setChosenWord(arrayWord);

    let underline = [];
    arrayWord.forEach((letter) => underline.push(" _"));
    setHiddenWord(underline);
  }

  console.log(chosenWord);

  function clickedLetter(letter) {
    setUsedLetters([...usedLetters, letter]);
    if (chosenWord.includes(letter)) {
      rightAnswer(letter);
    } else {
      wrongAnswer();
    }
  }

  function rightAnswer(letter) {
    const newWord = [...hiddenWord];
    chosenWord.forEach((lett, i) => {
      if (chosenWord[i] === letter) {
        newWord[i] = letter;
      }
    });
    setHiddenWord(newWord);

    if (!newWord.includes("_")) {
      setWordColor("green");
      finishGame();
    }
  }

  function wrongAnswer() {
    const newMistakes = mistakes + 1;
    setMistakes(newMistakes);

    if (newMistakes === 6) {
      setWordColor("red");
      finishGame();
    }
  }

  function guessWord() {
    let attempt = chosenWord.join("");
    if (guess === attempt) {
      setWordColor("green");
    } else {
      setWordColor("red");
      setMistakes(6);
    }
    finishGame();
  }

  function finishGame() {
    setUsedLetters(alphabet);
    setDisableInput(true);
    setGuess("");
    setHiddenWord(chosenWord);
  }

  return (
    <div className="main-container">
      <Jogo
        images={images}
        hiddenWord={hiddenWord}
        mistakes={mistakes}
        startGame={startGame}
        wordColor={wordColor}
      />
      <Letras
        alphabet={alphabet}
        clickedLetter={clickedLetter}
        usedLetters={usedLetters}
      />
      <Chute
        disableInput={disableInput}
        guess={guess}
        guessWord={guessWord}
        setGuess={setGuess}
      />
    </div>
  );
}

export default App;
