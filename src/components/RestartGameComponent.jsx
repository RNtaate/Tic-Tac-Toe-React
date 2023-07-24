import React, { useContext } from 'react';

import { TicContext } from '../context/TicContextProvider';
import styles from '../styles/RestartGameComponent.module.css';

const RestartGameComponent = () => {
  const context = useContext(TicContext);
  const { resetGameValues } = context;

  return (
    <div
      className={`${styles.restartGameContainerDiv} d-flex justify-content-center align-items-center`}
    >
      <button
        type="button"
        onClick={resetGameValues}
        className={styles.restartGameButton}
      >
        Restart Game
      </button>
    </div>
  );
};

export default RestartGameComponent;
