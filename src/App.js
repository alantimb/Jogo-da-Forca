import React, { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import palavras from "./palavras";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

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
  const [chosenWord, setChosenWord] = useState("");
  const [chosenArrayWord, setChosenArrayWord] = useState([]);
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
    setChosenWord(word);
    setChosenArrayWord(arrayWord);

    let underline = [];
    arrayWord.forEach((letter) => underline.push(" _"));
    setHiddenWord(underline);
  }

  function clickedLetter(letter) {
    setUsedLetters([...usedLetters, letter]);
    if (chosenArrayWord.includes(letter)) {
      rightAnswer(letter);
    } else {
      wrongAnswer();
    }
  }

  function rightAnswer(letter) {
    const newWord = [...hiddenWord];
    chosenArrayWord.forEach((lett, i) => {
      if (chosenArrayWord[i] === letter) {
        newWord[i] = letter;
      }
    });
    setHiddenWord(newWord);

    if (!newWord.includes(" _")) {
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
    let attempt = chosenArrayWord.join("");
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
    setHiddenWord(chosenArrayWord);
  }

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Jogo
          chosenWord={chosenWord}
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
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
