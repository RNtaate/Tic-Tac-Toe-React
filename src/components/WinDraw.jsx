import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import styles from '../styles/WinDraw.module.css';

const WinDraw = () => {
  const context = useContext(TicContext);
  const { players, player1Win, player2Win, draw } = context;

  const PlayerResultReturn = ({ player }) => {
    let playerName = players[player.toString()];
    return (
      <div className={styles.playerResultDiv}>
        <h3>{playerName} WINS 🎉🎉🎉 </h3>
      </div>
    );
  };

  if (player1Win) {
    return <PlayerResultReturn player={'player1'} />;
  } else if (player2Win) {
    return <PlayerResultReturn player={'player2'} />;
  }

  return (
    <div className={styles.playerResultDiv}>
      <h3>IT IS A DRAW</h3>
    </div>
  );
};
export default WinDraw;
