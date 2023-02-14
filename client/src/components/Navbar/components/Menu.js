import React from 'react';
import css from './menu.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setContactOpen } from '../../../features/stateSlice';

const Menu = ({ menuOpen, setMenuOpen, handleOnClick }) => {
  const dispatch = useDispatch();

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
            <li onClick={() => setMenuOpen(false)}>
              <Link to={'/my-work'}>our work</Link>
            </li>
            <li
              onClick={() => {
                handleOnClick();
                setMenuOpen(false);
              }}
              style={{ cursor: 'pointer' }}
            >
              socials
            </li>
            <li onClick={() => dispatch(setContactOpen(true))}>
              <u>contact us</u>
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
