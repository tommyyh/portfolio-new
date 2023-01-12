import React from 'react';
import css from './landing.module.scss';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className={css['landing']}>
      <Link to={'/'} className={css['landing-go-back']}>
        Go back
      </Link>
      <h1>
        Our Work<span>.</span>
      </h1>
    </section>
  );
};

export default Landing;
