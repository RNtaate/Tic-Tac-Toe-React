import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import WinDraw from '../components/WinDraw';
import RestartGameComponent from '../components/RestartGameComponent';
import Tile from '../components/Tile';

const MainPage = () => {
  const NUMBEROFTILES = new Array(9).fill(null);

  const context = useContext(TicContext);
  const { players, player1Win, player2Win, draw } = context;

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
      {NUMBEROFTILES.map((tile, index) => {
        let tileKey = index.toString();
        return <Tile tileNumber={index + 1} key={tileKey} />;
      })}
    </div>
  );
};

export default MainPage;
