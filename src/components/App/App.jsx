import React from 'react';
import Router from '../Router/Router';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Router />
    </div>
  );
};

export default App;
