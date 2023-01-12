import React from 'react';
import css from './footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={css['footer']}>
      <div className={css['footer-top']}>
        <h2>Bring your business to light.</h2>
        <h3>Let’s talk</h3>
      </div>

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
    </footer>
  );
};

export default Footer;
