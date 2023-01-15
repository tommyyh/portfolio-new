import React, { useEffect, useRef } from 'react';
import css from './landing.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const titleRef = useRef();

  useEffect(() => {
    const el = titleRef.current.children;

    setTimeout(() => {
      gsap.fromTo(
        el,
        { y: '6.85rem', duration: 0.6, opacity: 0 },
        {
          y: 0,
          duration: 0.6,
          opacity: 1,
          scrollTrigger: { trigger: el },
          stagger: 0.12,
        }
      );
    }, 2000);
  }, []);

  return (
    <main className={css['landing-cont']}>
      <div className={css['landing']}>
        <div>
          {isTabletOrMobile && <p>Web developer / designer</p>}

          <h1 ref={titleRef}>
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
