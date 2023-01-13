import React, { useState } from 'react';
import css from './navbar.module.scss';
import { Link } from 'react-router-dom';
import Menu from './components/Menu';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <nav className={css['nav-cont']}>
      <div className={css['nav']}>
        <Link to={'/'}>
          <h2>Tommy Hoang</h2>
        </Link>

        {isTabletOrMobile && (
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
        {isTabletOrMobile && <h4 onClick={() => setMenuOpen(true)}>menu</h4>}

        {/* DESKTOP */}
        {isDesktopOrLaptop && (
          <ul className={`${css['nav-links']} ${css['nav-links-mid']}`}>
            <li>info@tommyydesign.com</li>
            <li>+420 797 602 438</li>
          </ul>
        )}
        {isDesktopOrLaptop && (
          <ul className={css['nav-links']}>
            <li>
              <Link to={'/'}>home</Link>
            </li>
            <li>
              <Link to={'/my-work'}>my work</Link>
            </li>
            <li className={css['nav-links-contact']}>contact me</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
