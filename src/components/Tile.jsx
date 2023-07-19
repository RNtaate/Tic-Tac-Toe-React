import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import styles from '../styles/Tile.module.css';

const Tile = ({ tileNumber }) => {
  const context = useContext(TicContext);
  const {
    combinedMoves,
    playerSymbols,
    setCombinedMoves,
    player1Turn,
    setPlayer1Turn,
    setPlayer1Moves,
    setPlayer2Moves,
  } = context;

  const makeSelection = (e) => {
    e.stopPropagation();
    let currentId = e.target.id.toString();
    setCombinedMoves((prev) => {
      return {
        ...prev,
        [currentId]: player1Turn ? 'player1' : 'player2',
      };
    });

    if (player1Turn) {
      setPlayer1Moves((prev) => {
        return [...prev, currentId];
      });
    } else {
      setPlayer2Moves((prev) => {
        return [...prev, currentId];
      });
    }

    // This inclusion leads to only one re-render cycle of the overall gameboard, once per tile hence leading to improved performance.
    setPlayer1Turn(!player1Turn);
  };

  const SymbolComponent = ({ player }) => {
    return (
      <div className={styles.symbolDiv}>
        <img
          alt="symbol"
          src={playerSymbols[player]}
          className={styles.symbolCompImg}
        />
      </div>
    );
  };

  return (
    <div>
      {combinedMoves[tileNumber.toString()] ? (
        <SymbolComponent player={combinedMoves[tileNumber.toString()]} />
      ) : (
        <div
          id={tileNumber}
          onClick={makeSelection}
          className={styles.unchosenTileDiv}
        >
          <div
            className={styles.expectedSymbolDiv}
            style={{
              backgroundImage: player1Turn
                ? `url(${playerSymbols.player1})`
                : `url(${playerSymbols.player2})`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Tile;
