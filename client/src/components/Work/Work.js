import React from 'react';
import css from './work.module.scss';
import Websites from './components/Websites';
import { Link } from 'react-router-dom';

const Work = ({ detailed }) => {
  return (
    <section className={css['work']}>
      {!detailed && (
        <h2>
          Our Recent Work<span>.</span>
        </h2>
      )}

      <Websites detailed={detailed} />

      {!detailed && (
        <Link to={'/my-work'} className={css['work-view-all']}>
          View all our work (5)
        </Link>
      )}
    </section>
  );
};

export default Work;
