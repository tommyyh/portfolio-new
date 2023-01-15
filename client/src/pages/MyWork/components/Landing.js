import React, { useEffect, useRef } from 'react';
import css from './landing.module.scss';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cookies from 'js-cookie';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const titleRef = useRef();

  useEffect(() => {
    const el = titleRef.current.children;
    const cookieValue = Cookies.get('justEntered');

    if (!cookieValue) {
      setTimeout(() => {
        gsap.fromTo(
          el,
          { y: '6.85rem', duration: 0.6, opacity: 0 },
          {
            y: 0,
            duration: 0.6,
            opacity: 1,
            scrollTrigger: { trigger: el },
            stagger: -0.12,
          }
        );
      }, 2000);
    } else {
      gsap.fromTo(
        el,
        { y: '6.85rem', duration: 0.6, opacity: 0 },
        {
          y: 0,
          duration: 0.6,
          opacity: 1,
          scrollTrigger: { trigger: el },
          stagger: -0.12,
        }
      );
    }
  }, []);

  return (
    <section className={css['landing-cont']}>
      <div className={css['landing']} ref={titleRef}>
        <Link to={'/'} className={css['landing-go-back']}>
          Go back
        </Link>
        <h1>
          Our Work<span>.</span>
        </h1>
      </div>
    </section>
  );
};

export default Landing;
