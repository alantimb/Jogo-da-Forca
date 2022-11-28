import styled from "styled-components";

function Jogo(props) {
  const { images, mistakes, startGame, wordColor, hiddenWord } = props;

  return (
    <div className="gallows">
      <img src={images[mistakes]} alt="gallows' image" />
      <button onClick={startGame}>Escolher palavra</button>
      <MainWord color={wordColor}>{hiddenWord}</MainWord>
    </div>
  );
}

export default Jogo;

const MainWord = styled.h1`
  color: ${(props) => props.color};
  font-size: 40px;
  margin-right: 5px;
  font-family: "Segoe UI";
`;

