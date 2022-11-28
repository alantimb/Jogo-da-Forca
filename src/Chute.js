function Chute(props) {
  const { disableInput, guess, setGuess, guessWord } = props;

  return (
    <div className="input">
      <span>Já sei a palavra!</span>
      <input
        placeholder="Digite aqui seu chute"
        disabled={disableInput}
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={guessWord}>Chutar</button>
    </div>
  );
}

export default Chute;
