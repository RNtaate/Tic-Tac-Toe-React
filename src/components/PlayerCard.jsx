import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import styles from '../styles/PlayerCard.module.css';

const PlayerCard = ({ playerKey, isYourTurn }) => {
  const context = useContext(TicContext);
  const { playerSymbols, players } = context;
  const imageSymbol = playerSymbols[playerKey];
  const playerName = players[playerKey];

  return (
    <div className={styles.playerCardContainerDiv}>
      <span
        className={`${styles.yourTurnSpan} ${
          isYourTurn ? styles.turnActive : ''
        }`}
      >
        <h5>Your turn!</h5>
      </span>
      <p>{playerName}</p>
      <div className={styles.playerSymbolDiv}>
        <img alt="symbol" src={imageSymbol} />
      </div>
    </div>
  );
};

export default PlayerCard;
