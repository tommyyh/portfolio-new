import React from 'react';
import css from './landing.module.scss';
import { useMediaQuery } from 'react-responsive';

const Landing = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <main className={css['landing-cont']}>
      <div className={css['landing']}>
        <div>
          {isTabletOrMobile && <h6>Web developer / designer</h6>}
          <h1>
            {isDesktopOrLaptop && <h6>Web developer / designer</h6>}

            <div>
              <div className={css['landing-box']}></div>
              <span className={css['landing-title-1']}>Inspiring</span>
            </div>
            <div>
              <span className={css['landing-title-2']}>
                {isDesktopOrLaptop ? 'Web' : 'Website'}
              </span>
              <span className={css['landing-title-3']}>Designer</span>
            </div>
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Landing;
