import styled from "styled-components";

function Chute(props) {
  const { disableInput, guess, setGuess, guessWord } = props;

  return (
    <Input>
      <span>Já sei a palavra!</span>
      <input
        placeholder="Digite aqui seu chute"
        data-test="guess-input"
        disabled={disableInput}
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button data-test="guess-button" onClick={guessWord}>
        Chutar
      </button>
    </Input>
  );
}

export default Chute;

const Input = styled.div`
  margin-top: 20px;
  width: 630px;
  margin-left: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #39739d;

    background-color: #e1ecf4;
    border-radius: 5px;
    border: 1px solid #7aa7c7;

    margin: 4px;
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #b3d3ea;
    color: #2c5777;
    cursor: pointer;
  }

  input {
    width: 300px;
    height: 12px;
    margin-right: 10px;
    padding: 10px;

    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    border-radius: 5px;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-right: 10px;
  }

  input:placeholder-shown {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 16px;
    border-radius: 5px;
  }
`;
