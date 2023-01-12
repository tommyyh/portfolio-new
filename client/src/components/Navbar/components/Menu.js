import React from 'react';
import css from './menu.module.scss';
import { Link } from 'react-router-dom';

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={menuOpen ? `${css['menu']} ${css['menu-open']}` : css['menu']}
    >
      <div className={css['menu-top']}>
        <Link to={'/'}>
          <h2>Tommy Hoang</h2>
        </Link>
        <h4 onClick={() => setMenuOpen(false)}>close</h4>
      </div>

      <div
        className={
          menuOpen
            ? `${css['menu-content']} ${css['menu-content-visible']}`
            : css['menu-content']
        }
      >
        <div className={css['menu-links']}>
          <ul>
            <li>
              <Link to={'/my-work'}>my work</Link>
            </li>
            <li>
              <Link to={'/'}>socials</Link>
            </li>
            <li>
              <Link to={'/'}>
                <u>contact me</u>
              </Link>
            </li>
          </ul>
        </div>

        <div className={css['menu-info']}>
          <ul>
            <li>Web Developer / Designer</li>
            <li className={css['menu-info-1-half']}>Full Time Freelancer</li>
            <li>Based in Pilsen</li>
            <li>Czech Republic</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
