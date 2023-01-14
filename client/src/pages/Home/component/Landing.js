import React from 'react';
import css from './landing.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Landing = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <main className={css['landing-cont']}>
      <div className={css['landing']}>
        <div>
          {isTabletOrMobile && <p>Web developer / designer</p>}
          <h1>
            {isDesktopOrLaptop && <p>Web developer / designer</p>}

            <div>
              <div className={css['landing-box']}></div>
              <span className={css['landing-title-1']}>Inspiring</span>
            </div>
            <div>
              {isDesktopOrLaptop ? (
                <Link to={'/my-work'} className={css['landing-title-2']}>
                  Web
                </Link>
              ) : (
                <span className={css['landing-title-2']}>Website</span>
              )}
              <span className={css['landing-title-3']}>Designer</span>
            </div>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Landing;
