import React, { useEffect, useRef } from 'react';
import css from './goal.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { setContactOpen } from '../../../features/stateSlice';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Goal = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const dispatch = useDispatch();
  const elementRef = useRef();
  const lampRef = useRef();

  useEffect(() => {
    const el = elementRef.current.children;

    gsap.fromTo(
      el,
      { y: '6rem', duration: 0.75, opacity: 0 },
      {
        y: 0,
        duration: 0.75,
        opacity: 1,
        scrollTrigger: { trigger: el, start: 'center bottom' },
        stagger: 0.15,
      }
    );

    gsap.fromTo(
      lampRef.current,
      { y: '6rem', duration: 0.75, opacity: 0 },
      {
        y: 0,
        duration: 0.75,
        opacity: 1,
        scrollTrigger: { trigger: el, start: 'center bottom' },
      }
    );
  }, []);

  return (
    <section className={css['goal-cont']}>
      <div className={css['goal']} ref={elementRef}>
        <div className={css['goal-title']}>
          <h2>
            Web designer & developer who can help your business achieve more
          </h2>
          {isDesktopOrLaptop && <Lamp reference={lampRef} />}
        </div>

        <p>
          If you’re looking for someone, who can help your business reach more
          people by establishing a better online presence, then you’re in the
          right place. We are determined to get you results and help your
          business hit it’s next milestone.{' '}
          <u onClick={() => dispatch(setContactOpen(true))}>
            Together we will bring your business back to <span>light.</span>
          </u>
        </p>

        {isTabletOrMobile && <Lamp reference={lampRef} />}
      </div>
    </section>
  );
};

const Lamp = ({ reference }) => {
  return (
    <div className={css['goal-lamp']} ref={reference}>
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
        <rect
          x='17'
          y='153'
          width='7'
          height='7'
          rx='1'
          fill='#36C99A'
          className={css['bulb']}
        />
      </svg>
      <div className={css['goal-lamp-light']}></div>
    </div>
  );
};

export default Goal;
