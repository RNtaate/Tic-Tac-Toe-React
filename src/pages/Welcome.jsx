import React from 'react';

import styles from '../styles/Welcome.module.css';

const Welcome = () => {
  return (
    <section
      className={`${styles.welcomeMainSection} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.welcomeContainerDiv} d-flex justify-content-center align-items-center flex-col`}
      >
        <h1 className={styles.welcomeHeading}>WELCOME TO NORP'S TIC-TAC-TOE</h1>
        <button type="button" className={styles.welcomeStartButton}>
          START
        </button>
      </div>
    </section>
  );
};

export default Welcome;
