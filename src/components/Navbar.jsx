import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Navbar.module.css';
import logoSvg from '/tic-icon.svg';

const Navbar = () => {
  return (
    <header className={`${styles.navBarHeader} d-flex align-items-center`}>
      <Link to="/">
        <div className={`${styles.logoNameDiv} d-flex align-items-center`}>
          <div className={styles.logoDiv}>
            <img alt="Company Logo" src={logoSvg} />
          </div>
          <h2 className={styles.companyName}>NORP</h2>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
