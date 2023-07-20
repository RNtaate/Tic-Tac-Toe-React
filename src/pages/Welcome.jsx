import React, { useState, useContext } from 'react';

import styles from '../styles/Welcome.module.css';
import PlayerRegForm from '../components/PlayerRegForm';
import { TicContext } from '../context/TicContextProvider';

const Welcome = () => {
  const [showForm, setShowForm] = useState(false);

  const context = useContext(TicContext);
  const { players } = context;

  const CreatedPlayerCard = ({ playerName, player }) => {
    return (
      <div
        className={`${styles.chosenPlayerDiv} d-flex flex-col align-items-center justify-content-center`}
      >
        <small className={styles.playerCardSmall}>{player}</small>
        <h4 className={styles.playerCardName}>{playerName}</h4>
      </div>
    );
  };

  return (
    <section
      className={`${styles.welcomeMainSection} d-flex justify-content-center align-items-center`}
    >
      {showForm && <PlayerRegForm setShowForm={setShowForm} />}
      <div
        className={`${styles.welcomeContainerDiv} d-flex justify-content-center align-items-center flex-col`}
      >
        <h1 className={styles.welcomeHeading}>WELCOME TO NORP'S TIC-TAC-TOE</h1>
        <button
          type="button"
          className={styles.welcomeStartButton}
          onClick={() => setShowForm(true)}
        >
          START
        </button>

        {players.player1 && players.player2 && (
          <div
            className={`${styles.chosenPlayersContainer} d-flex justify-content-center align-items-center`}
          >
            <CreatedPlayerCard
              player={'Player 1'}
              playerName={players.player1}
            />
            <CreatedPlayerCard
              player={'Player 2'}
              playerName={players.player2}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Welcome;
