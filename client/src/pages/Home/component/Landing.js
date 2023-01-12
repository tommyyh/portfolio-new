import React from 'react';
import css from './landing.module.scss';

const Landing = () => {
  return (
    <main className={css['landing']}>
      <h6>Web developer / designer</h6>
      <h1>
        <span className={css['landing-title-1']}>Inspiring</span>
        <span className={css['landing-title-2']}>Website</span>
        <span className={css['landing-title-3']}>designer</span>
      </h1>
    </main>
  );
};

export default Landing;
