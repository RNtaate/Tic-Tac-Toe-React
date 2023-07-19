import React, { useState, createContext } from 'react';

import initialStateValues from '../services/InitialStateValues';
import xSymbol from '../assets/tic-x.svg';
import ySymbol from '../assets/tic-circle.svg';

export const TicContext = createContext();

const TicContextProvider = ({ children }) => {
  const players = {
    player1: 'ROY',
    player2: 'SHARON',
  };

  // const playerSymbols = {
  //   player1: 'X',
  //   player2: 'O',
  // };

  const playerSymbols = {
    player1: xSymbol,
    player2: ySymbol,
  };

  const [player1Moves, setPlayer1Moves] = useState(
    initialStateValues.player1Moves
  );
  const [player2Moves, setPlayer2Moves] = useState(
    initialStateValues.player2Moves
  );
  const [combinedMoves, setCombinedMoves] = useState(
    initialStateValues.combinedMoves
  );
  const [currentMove, setCurrentMove] = useState(
    initialStateValues.currentMove
  );
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [player1Win, setPlayer1Win] = useState(initialStateValues.player1Win);
  const [player2Win, setPlayer2Win] = useState(initialStateValues.player2Win);
  const [draw, setDraw] = useState(initialStateValues.draw);

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
    setPlayer1Moves,
    setPlayer2Moves,
    setCombinedMoves,
    setCurrentMove,
    setPlayer1Turn,
    setPlayer1Win,
    setPlayer2Win,
    setDraw,
  };

  return (
    <TicContext.Provider value={contextValue}>{children}</TicContext.Provider>
  );
};

export default TicContextProvider;
