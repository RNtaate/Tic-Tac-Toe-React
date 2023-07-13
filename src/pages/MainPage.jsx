import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';

const MainPage = () => {
  const context = useContext(TicContext);
  const { players } = context;

  return (
    <div>
      <h3>PLAYER ONE : {players.player1} </h3>
      <h3>PLAYER TWO : {players.player2} </h3>
    </div>
  );
};

export default MainPage;
