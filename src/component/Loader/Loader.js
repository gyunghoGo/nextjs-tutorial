import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_dots}>
        <div className={styles.loader_dots}>
          <i className={(styles.fa - solid, styles.fa - circle)}></i>
        </div>
        <div className={styles.loader_dots}>
          <i className={(styles.fa - solid, styles.fa - circle)}></i>
        </div>
        <div className={styles.loader_dots}>
          <i className={(styles.fa - solid, styles.fa - circle)}></i>
        </div>
      </div>
      <span className={styles.loader_text}>Loading</span>
    </div>
  );
};
