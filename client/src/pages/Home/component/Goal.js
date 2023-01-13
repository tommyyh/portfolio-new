import React from 'react';
import css from './goal.module.scss';
import { useMediaQuery } from 'react-responsive';

const Goal = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <section className={css['goal-cont']}>
      <div className={css['goal']}>
        <div className={css['goal-title']}>
          <h2>
            Web designer & developer who can help your business achieve more
          </h2>
          {isDesktopOrLaptop && <Lamp />}
        </div>

        <p>
          If you’re looking for someone, who can help your business reach more
          people by establishing a better online presence, then you’re in the
          right place. We are determined to get you results and help your
          business hit it’s next milestone.{' '}
          <u>
            Together we will bring your business back to <span>light.</span>
          </u>
        </p>

        {isTabletOrMobile && <Lamp />}
      </div>
    </section>
  );
};

const Lamp = () => {
  return (
    <div className={css['goal-lamp']}>
      <svg
        width={'9.56rem'}
        height={'10rem'}
        viewBox='0 0 153 160'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 3C0 1.34315 1.34315 0 3 0H150C151.657 0 153 1.34315 153 3V38H0V3Z'
          fill='#161616'
        />
        <path
          d='M0 48H100C101.657 48 103 49.3431 103 51V83C103 84.6569 101.657 86 100 86H3C1.34315 86 0 84.6569 0 83V48Z'
          fill='#161616'
        />
        <path d='M17 86H24V150H17V86Z' fill='#161616' />
        <rect x='17' y='153' width='7' height='7' rx='1' fill='#36C99A' />
      </svg>
      <div className={css['goal-lamp-light']}></div>
    </div>
  );
};

export default Goal;
