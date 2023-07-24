import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import styles from '../styles/RestartGameComponent.module.css';

const RestartGameComponent = () => {
  const context = useContext(TicContext);
  const { resetGameValues, hardReset } = context;

  return (
    <div
      className={`${styles.restartGameContainerDiv} d-flex justify-content-center align-items-center`}
    >
      <button
        type="button"
        onClick={resetGameValues}
        className={styles.restartGameButton}
      >
        Restart game
      </button>

      <button
        type="button"
        onClick={hardReset}
        className={`${styles.quitGameButton}`}
      >
        Quit game
      </button>
    </div>
  );
};

export default RestartGameComponent;
