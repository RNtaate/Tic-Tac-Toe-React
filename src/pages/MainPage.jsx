import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import WinDraw from '../components/WinDraw';
import RestartGameComponent from '../components/RestartGameComponent';

const MainPage = () => {
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
      <h3>PLAYER ONE : {players.player1} </h3>
      <h3>PLAYER TWO : {players.player2} </h3>
    </div>
  );
};

export default MainPage;
