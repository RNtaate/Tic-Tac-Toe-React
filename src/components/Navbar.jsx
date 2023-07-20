import React from 'react';

import styles from '../styles/Navbar.module.css';
import logoSvg from '../../public/tic-icon.svg';

const Navbar = () => {
  return (
    <header className={`${styles.navBarHeader} d-flex align-items-center`}>
      <div className={styles.logoDiv}>
        <img alt="Company Logo" src={logoSvg} />
      </div>
      <h2 className={styles.companyName}>NORP</h2>
    </header>
  );
};

export default Navbar;
