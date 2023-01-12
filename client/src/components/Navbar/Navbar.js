import React from 'react';
import css from './navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={css['nav']}>
      <Link to={'/'}>
        <h2>Tommy Hoang</h2>
      </Link>

      <h4>menu</h4>
    </nav>
  );
};

export default Navbar;
