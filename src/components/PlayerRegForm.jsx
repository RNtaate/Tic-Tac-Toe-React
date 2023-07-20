import React, { useState, useContext, useRef } from 'react';

import mainPageStyles from '../styles/MainPage.module.css';
import styles from '../styles/PlayerRegForm.module.css';
import { TicContext } from '../context/TicContextProvider';

const PlayerRegForm = ({ setShowForm }) => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const context = useContext(TicContext);
  const { setPlayers } = context;

  const handleSettingPlayerNames = (e) => {
    e.preventDefault();
    if (!player1Name || !player2Name) return;

    setPlayers({
      player1: player1Name,
      player2: player2Name,
    });
    setShowForm(false);
  };

  return (
    <section
      className={`${mainPageStyles.resultSection} ${styles.formBackdropSection} d-flex justify-content-center align-items-center`}
      onClick={(e) => setShowForm(false)}
    >
      <div
        className={`${styles.formContainerDiv} d-flex flex-col align-items-center`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Please enter the players' names here</h3>
        <form
          action="#"
          onSubmit={handleSettingPlayerNames}
          className={`${styles.playersForm} d-flex flex-col align-items-center`}
        >
          <input
            type="text"
            placeholder="Player 1's name"
            name="player1"
            autoComplete="off"
            onChange={(e) => setPlayer1Name(e.target.value)}
          />
          <input
            type="text"
            placeholder="Player 2's name"
            name="player2"
            autoComplete="off"
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
          <div
            className={`${styles.formButtonsDiv} d-flex justify-content-center align-items-center`}
          >
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PlayerRegForm;
