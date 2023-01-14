import React, { useState } from 'react';
import css from './navbar.module.scss';
import { Link } from 'react-router-dom';
import Menu from './components/Menu';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { setContactOpen } from '../../features/stateSlice';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const dispatch = useDispatch();

  return (
    <nav className={css['nav-cont']}>
      <div className={css['nav']}>
        <Link to={'/'} className={css['nav-title']}>
          <h2>Tommy Hoang</h2>
        </Link>

        {isTabletOrMobile && (
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
        {isTabletOrMobile && <h4 onClick={() => setMenuOpen(true)}>menu</h4>}

        {/* DESKTOP */}
        {isDesktopOrLaptop && (
          <ul className={`${css['nav-links']} ${css['nav-links-mid']}`}>
            <li
              onClick={() => {
                window.location.href = `mailto:info@tommyydesign.com`;
              }}
            >
              info@tommyydesign.com
            </li>
            <li
              onClick={() => {
                window.location.href = `tel:+420797602438`;
              }}
            >
              +420 797 602 438
            </li>
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
            <li
              className={css['nav-links-contact']}
              onClick={() => dispatch(setContactOpen(true))}
            >
              contact me
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
