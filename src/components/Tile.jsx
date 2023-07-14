import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import styles from '../styles/Tile.module.css';

const Tile = ({ tileNumber }) => {
  const context = useContext(TicContext);
  const { combinedMoves, playerSymbols, setCombinedMoves, player1Turn } =
    context;

  const makeSelection = (e) => {
    e.stopPropagation();
    console.log('This is the div that you clicked with id: ', e.target.id);
    setCombinedMoves((prev) => {
      return {
        ...prev,
        [e.target.id.toString()]: player1Turn ? 'player1' : 'player2',
      };
    });
  };

  const SymbolComponent = ({ player }) => {
    console.log('You have reached the symbol component with player: ', player);
    return <div className={styles.symbolDiv}>{playerSymbols[player]}</div>;
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
          {tileNumber} unchosen tile
        </div>
      )}
    </div>
  );
};

export default Tile;
