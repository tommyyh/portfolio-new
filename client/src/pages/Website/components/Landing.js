import React, { useEffect, useRef } from 'react';
import css from './landing.module.scss';
import RimmingtonImg from '../../../assets/images/rimmington.png';
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cookies from 'js-cookie';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const elementRef = useRef();
  const elementRef2 = useRef();

  useEffect(() => {
    const cookieValue = Cookies.get('justEntered');

    if (isDesktopOrLaptop) {
      const el = elementRef.current.children;
      const el2 = elementRef2.current.children;

      if (!cookieValue) {
        setTimeout(() => {
          gsap.fromTo(
            el[0].children,
            { x: '-5rem', duration: 0.58, opacity: 0 },
            {
              x: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
              stagger: 0.25,
            }
          );

          gsap.fromTo(
            el[1],
            { x: '5rem', duration: 0.58, opacity: 0 },
            {
              x: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
            }
          );

          gsap.fromTo(
            el2[0],
            { x: '-5rem', duration: 0.58, opacity: 0 },
            {
              x: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
              stagger: 0.25,
            }
          );

          gsap.fromTo(
            el2[1],
            { x: '5rem', duration: 0.58, opacity: 0 },
            {
              x: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
            },
            '+=3'
          );
        }, 2000);
      } else {
        gsap.fromTo(
          el[0].children,
          { x: '-5rem', duration: 0.58, opacity: 0 },
          {
            x: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
            stagger: 0.25,
          }
        );

        gsap.fromTo(
          el[1],
          { x: '5rem', duration: 0.58, opacity: 0 },
          {
            x: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
          }
        );

        gsap.fromTo(
          el2[0],
          { x: '-5rem', duration: 0.58, opacity: 0 },
          {
            x: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
            stagger: 0.25,
          }
        );

        gsap.fromTo(
          el2[1],
          { x: '5rem', duration: 0.58, opacity: 0 },
          {
            x: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
          },
          '+=3'
        );
      }
    } else {
      const el = elementRef.current.children;

      if (!cookieValue) {
        setTimeout(() => {
          gsap.fromTo(
            el[0].children,
            { y: '5rem', duration: 0.58, opacity: 0 },
            {
              y: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
              stagger: 0.25,
            }
          );

          gsap.fromTo(
            el[1].children,
            { y: '5rem', duration: 0.58, opacity: 0 },
            {
              y: 0,
              duration: 0.58,
              opacity: 1,
              scrollTrigger: { trigger: el, start: 'center bottom' },
              stagger: 0.15,
            }
          );
        }, 2000);
      } else {
        gsap.fromTo(
          el[0].children,
          { y: '5rem', duration: 0.58, opacity: 0 },
          {
            y: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
            stagger: 0.25,
          }
        );

        gsap.fromTo(
          el[1].children,
          { y: '5rem', duration: 0.58, opacity: 0 },
          {
            y: 0,
            duration: 0.58,
            opacity: 1,
            scrollTrigger: { trigger: el, start: 'center bottom' },
            stagger: 0.15,
          }
        );
      }
    }
  }, []);

  return (
    <main className={css['landing-cont']}>
      <div className={css['landing']} ref={elementRef}>
        {isTabletOrMobile && (
          <>
            <div className={css['landing-main']}>
              <h1>
                Bradford pharmacy vaccinated over 40,000 patients with their
                online booking form
              </h1>
              <a href={'https://rimmington.vercel.app/'}>Visit website</a>
            </div>

            <div className={css['landing-details']}>
              <Detail title={'Role'} text={'Fullstack developer'} />
              <Detail title={'Technology used'} text={'React, Django, Redux'} />
              <Detail title={'Type'} text={'E-commerces store'} />
              <Detail title={'Created'} text={'2022'} />
              <Detail
                title={'Description'}
                text={
                  'Rimming pharmacy is a pharmacy located in Englang, Bradford. Known for Rimming pharmacy is a pharmacy located in Englang, Bradford. Known for ce'
                }
                column={true}
              />
            </div>

            <img src={RimmingtonImg} alt='Website preview' />
            <img src={RimmingtonImg} alt='Website preview' />
          </>
        )}

        {isDesktopOrLaptop && (
          <>
            <div className={css['landing-main']} ref={elementRef}>
              <div className={css['landing-main-title']}>
                <div>
                  <h1>
                    Bradford pharmacy vaccinated over 40,000 patients with their
                    online booking form
                  </h1>

                  {isDesktopOrLaptop ? (
                    <div className={css['landing-learn-more-cont']}>
                      <a
                        href={'https://rimmington.vercel.app/'}
                        className={css['landing-learn-more']}
                      >
                        Visit website
                      </a>

                      <div className={css['landing-more-hover']}>
                        <p>Take a look for yourself</p>
                      </div>
                    </div>
                  ) : (
                    <a href={'https://rimmington.vercel.app/'}>Visit website</a>
                  )}
                </div>

                <div className={css['landing-main-details']}>
                  <Detail title={'Role'} text={'Fullstack developer'} />
                  <Detail
                    title={'Technology used'}
                    text={'React, Django, Redux'}
                  />
                </div>
              </div>

              <img src={RimmingtonImg} alt='Website preview' />
            </div>

            <div className={css['landing-details']} ref={elementRef2}>
              <img src={RimmingtonImg} alt='Website preview' />

              <div className={css['landing-details-inner']}>
                <Detail title={'Type'} text={'E-commerces store'} />
                <Detail title={'Created'} text={'2022'} />
                <Detail
                  title={'Description'}
                  text={
                    'Rimming pharmacy is a pharmacy located in Englang, Bradford. Known for Rimming pharmacy is a pharmacy located in Englang, Bradford. Known for ce'
                  }
                  column={true}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

const Detail = ({ title, text, column }) => {
  return (
    <div
      className={column ? css['landing-detail-column'] : css['landing-detail']}
    >
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Landing;
