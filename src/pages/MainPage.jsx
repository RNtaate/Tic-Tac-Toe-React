import React, { useContext, useEffect } from 'react';

import { TicContext } from '../context/TicContextProvider';
import WinDraw from '../components/WinDraw';
import RestartGameComponent from '../components/RestartGameComponent';
import Tile from '../components/Tile';
import styles from '../styles/MainPage.module.css';
import winChecker from '../helpers/winChecker';

const MainPage = () => {
  const NUMBEROFTILES = new Array(9).fill(null);

  const context = useContext(TicContext);
  const {
    combinedMoves,
    players,
    player1Win,
    player2Win,
    draw,
    player1Turn,
    player1Moves,
    player2Moves,
    setDraw,
    setPlayer1Win,
    setPlayer2Win,
  } = context;

  useEffect(() => {
    let combinedMovesLength = Object.keys(combinedMoves).length;
    let player1WinChecker = false;
    let player2WinChecker = false;
    if (
      combinedMovesLength > 0 &&
      (player1Moves.length > 2 || player2Moves.length > 2)
    ) {
      /* Reverse the player1Turn boolean roles here because the player1Turn state was changed in the makeSelection function found in the TileComponent before this useEffect was ever reached.*/

      if (player1Turn) {
        /**In this block, you should check for player2's win, hence reversing the roles for the player1Turn */
        // check for player 2 win
        player2WinChecker = winChecker(player2Moves);
        if (player2WinChecker) setPlayer2Win(player2WinChecker);
      } else {
        // check for player 1 win
        player1WinChecker = winChecker(player1Moves);
        if (player1WinChecker) setPlayer1Win(player1WinChecker);
      }

      if (
        combinedMovesLength >= NUMBEROFTILES.length &&
        !player1WinChecker &&
        !player2WinChecker
      ) {
        setDraw(true);
      }
    }
  }, [combinedMoves]);

  if (player1Win || player2Win || draw) {
    return (
      <>
        <WinDraw />
        <RestartGameComponent />
      </>
    );
  }

  return (
    <div>
      <p>{player1Turn ? players['player1'] : players['player2']}, Your turn!</p>
      <div className={styles.gameBoardDiv}>
        {NUMBEROFTILES.map((tile, index) => {
          let tileKey = index.toString();
          return <Tile tileNumber={index + 1} key={tileKey} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
