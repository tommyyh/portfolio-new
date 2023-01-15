import React, { useEffect, useRef } from 'react';
import css from './work.module.scss';
import Websites from './components/Websites';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = ({ detailed }) => {
  const elementRef = useRef();

  useEffect(() => {
    if (window.location.pathname === '/') {
      const el = elementRef.current.children;

      gsap.fromTo(
        el[0],
        { x: '-6rem', duration: 0.6, opacity: 0 },
        {
          x: 0,
          duration: 0.6,
          opacity: 1,
          scrollTrigger: { trigger: el[0], start: 'center center' },
        }
      );

      gsap.fromTo(
        el[2],
        {
          y: '2.5rem',
          duration: 0.4,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.4,
          opacity: 1,
          scrollTrigger: { trigger: el[2], start: 'center center' },
          onComplete() {
            el[2].style.transition = '250ms ease';
          },
        }
      );
    }
  }, []);

  return (
    <section className={css['work-cont']}>
      <div className={css['work']} ref={elementRef}>
        {!detailed && (
          <h2>
            Our Recent Work<span>.</span>
          </h2>
        )}

        <Websites detailed={detailed} />

        {!detailed && (
          <Link to={'/my-work'} className={css['work-view-all']}>
            View all our work (5)
          </Link>
        )}
      </div>
    </section>
  );
};

export default Work;
