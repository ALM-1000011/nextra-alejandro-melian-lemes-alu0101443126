// components/Bleed.js
import React from 'react';
import styles from '../styles/Bleed.module.css';

const Bleed = ({ children }) => {
  return <div className={styles.bleed}>{children}</div>;
};

export default Bleed;