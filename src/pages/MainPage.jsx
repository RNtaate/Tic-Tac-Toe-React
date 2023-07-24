import React, { useContext, useEffect } from 'react';

import { TicContext } from '../context/TicContextProvider';
import WinDraw from '../components/WinDraw';
import RestartGameComponent from '../components/RestartGameComponent';
import Tile from '../components/Tile';
import styles from '../styles/MainPage.module.css';
import winChecker from '../helpers/winChecker';
import PlayerCard from '../components/PlayerCard';

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
    setWinCombination,
  } = context;

  useEffect(() => {
    let combinedMovesLength = Object.keys(combinedMoves).length;
    let player1WinChecker = false;
    let player2WinChecker = false;
    let winCheckResults = null;
    if (
      combinedMovesLength > 0 &&
      (player1Moves.length > 2 || player2Moves.length > 2)
    ) {
      /* Reverse the player1Turn boolean roles here because the player1Turn state was changed in the makeSelection function found in the TileComponent before this useEffect was ever reached.*/

      if (player1Turn) {
        /**In this block, you should check for player2's win, hence reversing the roles for the player1Turn */
        // check for player 2 win
        winCheckResults = winChecker(player2Moves);
        player2WinChecker = winCheckResults.finalResult;
        if (player2WinChecker) {
          setPlayer2Win(player2WinChecker);
          setWinCombination(winCheckResults.winCombination);
        }
      } else {
        // check for player 1 win
        winCheckResults = winChecker(player1Moves);
        player1WinChecker = winCheckResults.finalResult;
        if (player1WinChecker) {
          setPlayer1Win(player1WinChecker);
          setWinCombination(winCheckResults.winCombination);
        }
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

  const ResultForeDrop = () => {
    if (player1Win || player2Win || draw) {
      return (
        <section className={`${styles.resultSection} d-flex`}>
          <div
            className={`${styles.resultContainerDiv} d-flex align-items-center justify-content-center flex-col`}
          >
            <WinDraw />
            <RestartGameComponent />
          </div>
        </section>
      );
    }

    return null;
  };

  return (
    <>
      <ResultForeDrop />
      <div className={styles.gameSectionContainerDiv}>
        <PlayerCard playerKey={'player1'} isYourTurn={player1Turn} />
        <div className={styles.gameBoardDiv}>
          {NUMBEROFTILES.map((tile, index) => {
            let tileKey = index.toString();
            return <Tile tileNumber={index + 1} key={tileKey} />;
          })}
        </div>
        <PlayerCard playerKey={'player2'} isYourTurn={!player1Turn} />
      </div>
    </>
  );
};

export default MainPage;
