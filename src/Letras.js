function Letras(props) {
  const { alphabet, usedLetters, clickedLetter } = props;

  return (
    <div className="letters">
      {alphabet.map((letra) => (
        <button
          key={letra}
          onClick={() => clickedLetter(letra)}
          disabled={usedLetters.includes(letra)}
        >
          {letra}
        </button>
      ))}
    </div>
  );
}

export default Letras;
