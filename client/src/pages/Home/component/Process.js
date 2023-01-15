import React, { useEffect, useRef } from 'react';
import css from './process.module.scss';
import { useDispatch } from 'react-redux';
import { setContactOpen } from '../../../features/stateSlice';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const dispatch = useDispatch();
  const elementRef = useRef();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    const el = elementRef.current;

    if (isDesktopOrLaptop) {
      gsap.fromTo(
        el,
        { x: '-3.3rem', duration: 0.75, opacity: 0 },
        {
          x: 0,
          duration: 0.75,
          opacity: 1,
          scrollTrigger: { trigger: el, start: 'center center' },
        }
      );
    } else {
      gsap.fromTo(
        el,
        { y: '3.3rem', duration: 0.75, opacity: 0 },
        {
          y: 0,
          duration: 0.75,
          opacity: 1,
          scrollTrigger: { trigger: el, start: 'center bottom' },
        }
      );
    }
  }, []);

  const handleOnClick = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={css['process-cont']}>
      <div className={css['process']}>
        <h2 ref={elementRef}>What is our process?</h2>

        <Step
          order={'a'}
          title={'Get in touch with me'}
          text={
            <p>
              The first thing you need to do is reaching out to me. You can do
              that either by{' '}
              <u onClick={() => dispatch(setContactOpen(true))}>
                filling out a form
              </u>{' '}
              or contacting me on any of my{' '}
              <u onClick={handleOnClick}>socials</u>.
            </p>
          }
        />
        <Step
          order={'b'}
          title={'Discuss your needs'}
          text={
            <p>
              The next step is discussing your specific needs. Whether you need
              a<span> brand new website</span> or updating your old one, we will
              always come up with a solution together.
            </p>
          }
        />
        <Step
          order={'c'}
          title={'General Research'}
          text={
            <p>
              Up next is research. It is crucial that we understand everything,
              like your <span>target audience</span>, products etc., before
              proceeding further.
            </p>
          }
        />
        <Step
          order={'d'}
          title={'Designing a prototype'}
          text={
            <p>
              After that, we will design a <span>prototype website</span> based
              on your specifications.
            </p>
          }
        />
        <Step
          order={'e'}
          title={'Developing your website'}
          text={
            <p>
              Once you’re satisfied with the design, we will
              <span> start to build</span> the website and we will turn it into
              reality.
            </p>
          }
        />
        <Step
          order={'f'}
          title={'Deployment'}
          text={
            <p>
              The last step is deployment. All that is left to do is to
              <span> deploy</span> the website online and we’re done.
            </p>
          }
        />
      </div>
    </section>
  );
};

const Step = ({ order, title, text }) => {
  const elementRef = useRef();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      const el = elementRef.current.children;

      gsap.fromTo(
        el[0],
        { x: '-3.5rem', duration: 0.765, opacity: 0 },
        {
          x: 0,
          duration: 0.765,
          opacity: 1,
          scrollTrigger: { trigger: el, start: 'center bottom' },
        }
      );

      gsap.fromTo(
        el[1],
        { x: '3.5rem', duration: 0.765, opacity: 0 },
        {
          x: 0,
          duration: 0.765,
          opacity: 1,
          scrollTrigger: { trigger: el, start: 'center bottom' },
          stagger: 0.18,
        }
      );
    }
  }, []);

  return (
    <div className={css['step']} ref={elementRef}>
      <div className={css['step-order']}>
        <h6>{order},</h6>
      </div>

      <div className={css['step-content']}>
        <div className={css['step-content-title']}>
          <h4>{title}</h4>
        </div>

        <div className={css['step-content-text']}>{text}</div>
      </div>
    </div>
  );
};

export default Process;
