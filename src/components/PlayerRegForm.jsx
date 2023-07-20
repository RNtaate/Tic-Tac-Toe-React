import React from 'react';

import mainPageStyles from '../styles/MainPage.module.css';
import styles from '../styles/PlayerRegForm.module.css';

const PlayerRegForm = ({ setShowForm }) => {
  return (
    <section
      className={`${mainPageStyles.resultSection} ${styles.formBackdropSection} d-flex justify-content-center align-items-center`}
      onClick={(e) => setShowForm(false)}
    >
      <div className="formContainerDiv" onClick={(e) => e.stopPropagation()}>
        <h3>Please enter the players' names here</h3>
        <form action="#">
          <input type="text" placeholder="Player 1's name" name="player1" />
          <input type="text" placeholder="Player 2's name" name="player2" />
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      </div>
    </section>
  );
};

export default PlayerRegForm;
