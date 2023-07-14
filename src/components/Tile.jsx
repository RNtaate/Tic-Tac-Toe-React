import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';

const Tile = ({ tileNumber }) => {
  const context = useContext(TicContext);
  const { combinedMoves, playerSymbols } = context;

  const SymbolComponent = (player) => {
    return <div>{playerSymbols[player]}</div>;
  };

  return (
    <div>
      {combinedMoves[tileNumber.toString()] ? (
        <SymbolComponent player={combinedMoves[tileNumber.toString()]} />
      ) : (
        <div>{tileNumber} unchosen tile</div>
      )}
    </div>
  );
};

export default Tile;
