import React, { useState } from 'react';

import styles from '../styles/Welcome.module.css';
import PlayerRegForm from '../components/PlayerRegForm';

const Welcome = () => {
  const [showForm, setShowForm] = useState(false);
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
      </div>
    </section>
  );
};

export default Welcome;
