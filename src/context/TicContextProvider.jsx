import React, { useState, createContext } from 'react';

export const TicContext = createContext();

const TicContextProvider = ({ children }) => {
  const players = {
    player1: 'ROY',
    player2: 'SHARON',
  };

  const playerSymbols = {
    player1: 'X',
    player2: 'O',
  };

  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);
  const [combinedMoves, setCombinedMoves] = useState([]);
  const [currentMove, setCurrentMove] = useState('');
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [player1Win, setPlayer1Win] = useState(true);
  const [player2Win, setPlayer2Win] = useState(false);
  const [draw, setDraw] = useState(false);

  const contextValue = {
    players,
    playerSymbols,
    player1Moves,
    player2Moves,
    combinedMoves,
    currentMove,
    player1Turn,
    player1Win,
    player2Win,
    draw,
  };

  return (
    <TicContext.Provider value={contextValue}>{children}</TicContext.Provider>
  );
};

export default TicContextProvider;
