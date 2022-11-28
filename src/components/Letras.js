import styled from "styled-components";

function Letras(props) {
  const { alphabet, usedLetters, clickedLetter } = props;

  return (
    <Letters>
      {alphabet.map((letra) => (
        <button
          key={letra}
          onClick={() => clickedLetter(letra)}
          disabled={usedLetters.includes(letra)}
        >
          {letra}
        </button>
      ))}
    </Letters>
  );
}

export default Letras;

const Letters = styled.div`
  width: 630px;
  margin-left: 50px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;

    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    color: #39739d;
    margin: 4px;
  }

  button:hover {
    background-color: #b3d3ea;
    color: #2c5777;
    cursor: pointer;
  }

  button:disabled {
    background-color: #9faab5;
    border: 1px solid #79818a;
    color: #79818a;
    cursor: default;
  }
`;
