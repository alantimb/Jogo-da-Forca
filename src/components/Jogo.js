import styled from "styled-components";

function Jogo(props) {
  const { images, mistakes, startGame, wordColor, hiddenWord } = props;

  return (
    <Gallows>
      <img src={images[mistakes]} alt="gallows' image" />
      <button onClick={startGame}>Escolher palavra</button>
      <MainWord color={wordColor}>{hiddenWord}</MainWord>
    </Gallows>
  );
}

export default Jogo;

const MainWord = styled.h1`
  color: ${(props) => props.color};
  margin-right: 5px;
`;

const Gallows = styled.div`
  width: 700px;
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

  img {
    width: 400px;
  }

  button {
    min-width: 150px;
    background-color: #27ae60;
    border-radius: 8px;
    border-style: none;

    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    cursor: pointer;

    position: absolute;
    padding: 15px 20px;
    right: 0;
    top: 30px;
  }

  h1 {
    font-size: 48px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
  }
`;
