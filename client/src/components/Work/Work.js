import React from 'react';
import css from './work.module.scss';
import Projects from './components/Projects';
import { Link } from 'react-router-dom';

const Work = () => {
  return (
    <section className={css['work']}>
      <h2>
        Our Recent Work<span>.</span>
      </h2>

      <Projects />

      <Link to={'/'}>View all our work (5)</Link>
    </section>
  );
};

export default Work;
