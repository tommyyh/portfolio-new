import React, { useState, useEffect } from 'react';
import css from './navbar.module.scss';
import { Link } from 'react-router-dom';
import Menu from './components/Menu';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { setContactOpen } from '../../features/stateSlice';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const dispatch = useDispatch();
  const [showArrow, setShowArrow] = useState(false);
  const [WelcomeScreen, setWelcomeScreen] = useState(false);

  const handleOnClick = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // Banner before entering page
  useEffect(() => {
    let cookieValue = Cookies.get('justEntered');

    if (!cookieValue) {
      setWelcomeScreen(true);
      setTimeout(() => {
        Cookies.set('justEntered', new Date());
      }, 2000);
    } else {
      setWelcomeScreen(false);
    }

    return () => {
      Cookies.remove('justEntered');
    };
  }, []);

  useEffect(() => {
    // If user scrolls more than 500px -> set nav background to solid color
    const onScroll = () => {
      if (window.scrollY > 500) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className={css['loading-cont']}>
        <div
          className={
            WelcomeScreen
              ? `${css['loading-bg']} ${css['loading-bg-active']}`
              : css['loading-bg']
          }
        >
          <h2>Tommy Hoang</h2>
        </div>

        <div
          className={
            WelcomeScreen
              ? `${css['loading1']} ${css['loading1-active']}`
              : css['loading1']
          }
        ></div>
        <div
          className={
            WelcomeScreen
              ? `${css['loading2']} ${css['loading2-active']}`
              : css['loading2']
          }
          onTransitionEnd={() => setWelcomeScreen(false)}
        ></div>
      </div>

      <nav className={css['nav-cont']}>
        <div className={css['nav']}>
          {/* GO BACK TO TOP */}
          <div
            className={
              showArrow
                ? `${css['nav-go-back']} ${css['nav-go-back-active']}`
                : css['nav-go-back']
            }
            onClick={goToTop}
          >
            <svg
              width='1rem'
              height='0.5rem'
              viewBox='0 0 16 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='7.19458'
                y='0.147263'
                width='2'
                height='9.39176'
                rx='1'
                transform='rotate(50 7.19458 0.147263)'
                fill='#9C9C9C'
              />
              <rect
                x='6.23169'
                y='1.53209'
                width='2'
                height='9.96816'
                rx='1'
                transform='rotate(-50 6.23169 1.53209)'
                fill='#9C9C9C'
              />
            </svg>
          </div>

          <Link to={'/'} className={css['nav-title']}>
            <h2>Tommy Hoang</h2>
          </Link>

          {isTabletOrMobile && (
            <Menu
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              handleOnClick={handleOnClick}
            />
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
                <Link to={'/my-work'}>our work</Link>
              </li>
              <li
                onClick={handleOnClick}
                className={css['nav-links-social']}
                style={{ cursor: 'pointer' }}
              >
                social
              </li>
              <li
                className={css['nav-links-contact']}
                onClick={() => dispatch(setContactOpen(true))}
              >
                contact us
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
