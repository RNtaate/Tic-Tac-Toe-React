import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import styles from '../styles/PlayerCard.module.css';

const PlayerCard = ({ playerKey, isYourTurn }) => {
  const context = useContext(TicContext);
  const { playerSymbols, players, player1Win, player2Win, draw } = context;
  const imageSymbol = playerSymbols[playerKey];
  const playerName = players[playerKey];

  return (
    <div
      className={`${styles.playerCardContainerDiv} d-flex flex-col justify-content-center align-items-center`}
      style={{
        backgroundColor: isYourTurn
          ? 'var(--bg-lighter'
          : 'var(--bg-secondary)',
      }}
    >
      {!(player1Win || player2Win || draw) && (
        <span
          className={`${styles.yourTurnSpan} ${
            isYourTurn ? styles.turnActive : ''
          } d-flex align-items-center justify-content-center`}
        >
          <span>
            <i className="fa-solid fa-angle-right"></i>
          </span>
          <h3>Your turn!</h3>
        </span>
      )}

      <span>
        <i className="fa-solid fa-user"></i>
      </span>
      <h5 className={styles.playerCardName}>{playerName}</h5>
      <div className={styles.playerSymbolDiv}>
        <img alt="symbol" src={imageSymbol} />
      </div>
    </div>
  );
};

export default PlayerCard;
