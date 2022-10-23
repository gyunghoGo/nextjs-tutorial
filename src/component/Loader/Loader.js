import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader_dots}>
        <div className={styles.loader_dot}>
          <i className={(styles.fa_solid, styles.fa_circle)}></i>
        </div>
        <div className={styles.loader_dot}>
          <i className={(styles.fa_solid, styles.fa_circle)}></i>
        </div>
        <div className={styles.loader_dot}>
          <i className={(styles.fa_solid, styles.fa_circle)}></i>
        </div>
      </div>
      <span className={styles.loader_text}>Loading</span>
    </div>
  );
};

export default Loader;
