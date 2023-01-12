import React, { useState } from 'react';
import css from './navbar.module.scss';
import { Link } from 'react-router-dom';
import Menu from './components/Menu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={css['nav']}>
      <Link to={'/'}>
        <h2>Tommy Hoang</h2>
      </Link>

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <h4 onClick={() => setMenuOpen(true)}>menu</h4>
    </nav>
  );
};

export default Navbar;
