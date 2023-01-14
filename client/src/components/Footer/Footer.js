import React from 'react';
import css from './footer.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setContactOpen } from '../../features/stateSlice';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer
      className={css['footer-cont']}
      style={window.location.pathname === '/' ? { margin: '0' } : {}}
    >
      <div className={css['footer']}>
        <div className={css['footer-top']}>
          <h2>Bring your business to light.</h2>
          <h3 onClick={() => dispatch(setContactOpen(true))}>Let’s talk</h3>
        </div>

        <div className={css['footer-links']}>
          <div className={css['footer-mid']}>
            <ul>
              <li>
                <u>info@tommyydesign.com</u>
              </li>
              <li>
                <u>+420 797 602 438</u>
              </li>
              <li>
                <Link to={'/'}>Instagram</Link>
              </li>
              <li>
                <Link to={'/'}>Tik Tok</Link>
              </li>
              <li>
                <Link to={'/'}>LinkedIn</Link>
              </li>
            </ul>
          </div>

          <div className={css['footer-bot']}>
            <ul>
              <li>
                <u>Privacy & Policy</u>
              </li>
              <li>Czech Republic, Pilsen</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
