import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';

const WinDraw = () => {
  const context = useContext(TicContext);
  const { players, player1Win, player2Win, draw } = context;

  const PlayerResultReturn = ({ player }) => {
    let playerName = players[player.toString()];
    return (
      <div>
        <p>{playerName} WINS 🎉🎉🎉 </p>
      </div>
    );
  };

  if (player1Win) {
    return <PlayerResultReturn player={'player1'} />;
  } else if (player2Win) {
    return <PlayerResultReturn player={'player2'} />;
  }

  return (
    <div>
      <p>IT IS A DRAW!</p>
    </div>
  );
};
export default WinDraw;
