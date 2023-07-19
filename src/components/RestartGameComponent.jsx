import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import initialStateValues from '../services/InitialStateValues';
import styles from '../styles/RestartGameComponent.module.css';

const RestartGameComponent = () => {
  const context = useContext(TicContext);
  const {
    setPlayer1Moves,
    setPlayer2Moves,
    setCombinedMoves,
    setCurrentMove,
    setPlayer1Turn,
    setPlayer1Win,
    setPlayer2Win,
    setDraw,
  } = context;

  const restartGame = () => {
    setPlayer1Moves(initialStateValues.player1Moves);
    setPlayer2Moves(initialStateValues.player2Moves);
    setCombinedMoves(initialStateValues.combinedMoves);
    setCurrentMove(initialStateValues.currentMove);
    setPlayer1Turn(initialStateValues.player1Turn);
    setPlayer1Win(initialStateValues.player1Win);
    setPlayer2Win(initialStateValues.player2Win);
    setDraw(initialStateValues.draw);
  };

  return (
    <div
      className={`${styles.restartGameContainerDiv} d-flex justify-content-center align-items-center`}
    >
      <button
        type="button"
        onClick={restartGame}
        className={styles.restartGameButton}
      >
        Restart Game
      </button>
    </div>
  );
};

export default RestartGameComponent;
