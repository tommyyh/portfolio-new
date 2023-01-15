import React, { useEffect, useRef } from 'react';
import css from './preview.module.scss';
import Adonio from '../../../assets/images/adonio.png';
import Rimmington from '../../../assets/images/rimmington.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cookies from 'js-cookie';

gsap.registerPlugin(ScrollTrigger);

const Preview = () => {
  const prevRef = useRef();

  useEffect(() => {
    const el = prevRef.current.children[0];
    const cookieValue = Cookies.get('justEntered');

    if (!cookieValue) {
      setTimeout(() => {
        gsap.fromTo(
          el,
          { duration: 0.4, opacity: 0.5 },
          {
            duration: 0.4,
            opacity: 0.85,
            scrollTrigger: { trigger: el },
          }
        );
      }, 2450);
    } else {
      gsap.fromTo(
        el,
        { duration: 0.4, opacity: 0.5 },
        {
          duration: 0.4,
          opacity: 0.85,
          scrollTrigger: { trigger: el },
        }
      );
    }
  }, []);

  return (
    <section className={css['preview-cont']}>
      <div className={css['preview-inner']} ref={prevRef}>
        <div className={css['preview']}>
          <img src={Adonio} alt='Adonio store' />
          <img src={Rimmington} alt='Rimmington pharmacy' />
        </div>
      </div>
    </section>
  );
};

export default Preview;
