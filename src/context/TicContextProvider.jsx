import React, { useState, createContext } from 'react';

import initialStateValues from '../services/InitialStateValues';
import xSymbol from '../assets/tic-x.svg';
import ySymbol from '../assets/tic-circle.svg';

export const TicContext = createContext();

const TicContextProvider = ({ children }) => {
  const [players, setPlayers] = useState({
    player1: '',
    player2: '',
  });

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
  const [winCombination, setWinCombination] = useState(
    initialStateValues.winCombination
  );
  const [currentMove, setCurrentMove] = useState(
    initialStateValues.currentMove
  );
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [player1Win, setPlayer1Win] = useState(initialStateValues.player1Win);
  const [player2Win, setPlayer2Win] = useState(initialStateValues.player2Win);
  const [draw, setDraw] = useState(initialStateValues.draw);

  const resetGameValues = () => {
    setPlayer1Moves(initialStateValues.player1Moves);
    setPlayer2Moves(initialStateValues.player2Moves);
    setCombinedMoves(initialStateValues.combinedMoves);
    setWinCombination(initialStateValues.winCombination);
    setCurrentMove(initialStateValues.currentMove);
    setPlayer1Turn(initialStateValues.player1Turn);
    setPlayer1Win(initialStateValues.player1Win);
    setPlayer2Win(initialStateValues.player2Win);
    setDraw(initialStateValues.draw);
  };

  const hardReset = () => {
    setPlayers({
      player1: '',
      player2: '',
    });

    resetGameValues();
  };

  const contextValue = {
    players,
    playerSymbols,
    player1Moves,
    player2Moves,
    combinedMoves,
    winCombination,
    currentMove,
    player1Turn,
    player1Win,
    player2Win,
    draw,
    setPlayers,
    setPlayer1Moves,
    setPlayer2Moves,
    setCombinedMoves,
    setWinCombination,
    setCurrentMove,
    setPlayer1Turn,
    setPlayer1Win,
    setPlayer2Win,
    setDraw,
    resetGameValues,
    hardReset,
  };

  return (
    <TicContext.Provider value={contextValue}>{children}</TicContext.Provider>
  );
};

export default TicContextProvider;
